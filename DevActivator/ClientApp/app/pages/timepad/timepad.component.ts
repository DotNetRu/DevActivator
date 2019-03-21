import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ActivatedRoute, Params } from "@angular/router";
import { DateConverterService, LABELS, PATTERNS } from "@dotnetru/core";
import { Moment } from "moment";
import { Subscription } from "rxjs";

import { FriendEditorService } from "../friend-editor/friend-editor.service";
import { IFriend } from "../friend-editor/interfaces";
import { COMMUNITIES } from "../meetup-editor/constants";
import { Community } from "../meetup-editor/enums";
import { ISession } from "../meetup-editor/interfaces";
import { ISpeaker } from "../speaker-editor/interfaces";
import { ITalk } from "../talk-editor/interfaces";
import { VenueEditorDialogComponent } from "../venue-editor";
import { IVenue } from "../venue-editor/interfaces";
import { ICompositeMeetup, IMap, IRandomConcatModel } from "./interfaces";
import { CompositeService } from "./timepad.service";

// todo: regular service method
const DEFAULT_VENUE: IVenue = {} as IVenue;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CompositeService],
    selector: "mtp-timepad",
    styleUrls: ["timepad.component.css"],
    templateUrl: "timepad.component.html",
})
export class TimepadComponent implements OnInit, OnDestroy {
    public readonly Community = Community;
    public readonly COMMUNITIES = COMMUNITIES;
    public readonly LABELS = LABELS;
    public readonly PATTERNS = PATTERNS;
    public readonly timeFormat: string = "HH:mm";

    public editMode: boolean = true;

    public name: string | undefined = undefined;
    public communityId: Community | undefined;
    public venue: IVenue = Object.assign({}, DEFAULT_VENUE);
    public sessions: ISession[] = [];
    public talks: IMap<ITalk> = {};
    public speakers: IMap<ISpeaker> = {};
    public friends: IFriend[] = [];

    @Input()
    get meetupId() {
        return this._meetupId || "";
    }
    set meetupId(value: string) {
        this._meetupId = value;
        if (this.editMode) {
            this._compositeService.fetchMeetup(this._meetupId, this.descriptor);
        }
    }

    private _meetupId?: string;
    private _subs: Subscription[] = [];

    private get descriptor(): IRandomConcatModel {
        return {
            name: this.name,
            communityId: String(this.communityId || ""),
            venueId: this.venue ? this.venue.id : undefined,
            friendIds: this.friends.map((x) => x.id),
            sessions: this.sessions.map((x) => Object.assign({}, x, {
                endTime: x.endTime ? DateConverterService.toApiString(x.endTime) : "",
                startTime: x.startTime ? DateConverterService.toApiString(x.startTime) : "",
            })),
            speakerIds: Object.keys(this.speakers),
            talkIds: Object.keys(this.talks),
        };
    }

    constructor(
        private _dialog: MatDialog,
        private _compositeService: CompositeService,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
    ) { }

    public ngOnInit(): void {
        this._subs = [
            this._activatedRoute.params
                .subscribe((params: Params) => {
                    this.editMode = typeof params.meetupId === "string" && params.meetupId.length > 0;
                    if (this.editMode) {
                        this.meetupId = params.meetupId;
                    }
                }),
            this._compositeService.meetup$
                .subscribe((data: ICompositeMeetup) => {
                    this._meetupId = data.id;
                    this.name = data.name;
                    this.communityId = data.communityId;
                    this.venue = data.venue || Object.assign({}, DEFAULT_VENUE);
                    this.sessions = data.sessions;
                    this.talks = data.talks;
                    this.speakers = data.speakers;
                    this.friends = data.friends;
                    this._changeDetectorRef.detectChanges();
                }),
        ];
    }

    public ngOnDestroy(): void {
        this._subs.forEach((x) => x.unsubscribe);
    }

    public save(): void {
        this._compositeService.saveMeetup(this._meetupId, this.descriptor);
    }

    public addSession(talkId: string = ""): void {
        // todo: remove code duplication, see meetup-editor.component.ts
        let startTime: Moment | undefined;
        if (this.sessions.length > 0) {
            const lastSession = this.sessions[this.sessions.length - 1];
            if (lastSession.endTime) {
                startTime = lastSession.endTime.clone().add(30, "minutes");
            }
        }

        let endTime: Moment | undefined;
        if (startTime) {
            endTime = startTime.clone().add(1, "hour");
        }

        this.sessions.push({ talkId, startTime, endTime });
    }

    public deleteSession(index: number): void {
        this.sessions.splice(index, 1);
    }

    public onTalkSelected(talkId: string, index: number): void {
        const descriptor = this.descriptor;
        if (descriptor.talkIds.some((x) => x === talkId)) {
            this.sessions[index].talkId = talkId;
        } else {
            descriptor.talkIds.push(talkId);
            this._compositeService.fetchMeetup(this._meetupId, descriptor, () => {
                const session: ISession | undefined = this.sessions[index];
                if (session) {
                    this.sessions[index] = Object.assign({}, session, { talkId });
                } else {
                    this.addSession(talkId);
                }
            });
        }
    }

    public onTalkSaved(talk: ITalk): void {
        if (talk.speakerIds.some((x) => {
            return !this.speakers[x.speakerId];
        })) {
            this._compositeService.fetchMeetup(this._meetupId, this.descriptor);
        } else {
            this.talks[talk.id] = talk;
        }
    }

    public onSpeakerSaved(speaker: ISpeaker, talk: ITalk): void {
        this.speakers[speaker.id] = speaker;
        const hasRef = talk.speakerIds.find((x) => x.speakerId === speaker.id);
        if (!hasRef) {
            talk.speakerIds.push({ speakerId: speaker.id });
        }
    }

    public onSessionDrop(event: CdkDragDrop<ISession[]>): void {
        const tempTalkId: string = this.sessions[event.previousIndex].talkId;
        this.sessions[event.previousIndex].talkId = this.sessions[event.currentIndex].talkId;
        this.sessions[event.currentIndex].talkId = tempTalkId;
    }

    public deleteFriend(ev: Event, index: number): void {
        this.friends.splice(index, 1);
    }

    public onFriendDrop(event: CdkDragDrop<ISession[]>): void {
        moveItemInArray(this.friends, event.previousIndex, event.currentIndex);
    }

    public onFriendSaved(friend: IFriend, index: number): void {
        this.friends[index] = friend;
    }

    public onFriendSelected(friendId: string): void {
        const descriptor = this.descriptor;
        descriptor.friendIds.push(friendId);
        this._compositeService.fetchMeetup(this._meetupId, descriptor);
    }

    public createFriend(): void {
        this.friends.push(FriendEditorService.getDefaultFriend());
    }

    public onVenueSelected(venueId: string): void {
        const descriptor = this.descriptor;
        descriptor.venueId = venueId;
        this._compositeService.fetchMeetup(this._meetupId, descriptor);
    }

    public createVenue(): void {
        this.openVenueDialog(undefined);
    }

    public editVenue(): void {
        this.openVenueDialog(this.venue);
    }

    private openVenueDialog(data?: IVenue): void {
        const config: MatDialogConfig<IVenue> = {
            panelClass: "full-height",
            width: "640px",
        };
        if (data) {
            config.data = data;
        }
        const dialogRef = this._dialog.open(VenueEditorDialogComponent, config);

        dialogRef.afterClosed().subscribe((venue?: IVenue) => {
            if (venue && venue.id) {
                this.onVenueSelected(venue.id);
            }
        });
    }
}
