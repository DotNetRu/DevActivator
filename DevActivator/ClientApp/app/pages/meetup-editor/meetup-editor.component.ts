import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { LABELS, LayoutService, PATTERNS } from "@dotnetru/core";
import { IAutocompleteRow } from "@dotnetru/shared/autocomplete";
import { Moment } from "moment";
import { Subscription } from "rxjs";

import { COMMUNITIES } from "./constants";
import { Community } from "./enums";
import { IMeetup, ISession } from "./interfaces";
import { MeetupEditorService } from "./meetup-editor.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MeetupEditorService],
    selector: "mtp-meetup-editor",
    styleUrls: ["./meetup-editor.component.css"],
    templateUrl: "./meetup-editor.component.html",
})
export class MeetupEditorComponent implements OnInit, OnDestroy {
    public readonly LABELS = LABELS;
    public readonly PATTERNS = PATTERNS;
    public readonly Community = Community;
    public readonly COMMUNITIES = COMMUNITIES;

    // todo: create service method getDefaultMeetup
    public meetup: IMeetup = {
        communityId: Community.SpbDotNet,
        friendIds: [],
        id: "",
        name: "",
        sessions: [],
        venueId: "",
    };

    public editMode: boolean = true;

    private _subs: Subscription[] = [];

    constructor(
        private _meetupEditorService: MeetupEditorService,
        private _layoutService: LayoutService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _changeDetectorRef: ChangeDetectorRef,
    ) { }

    public ngOnInit(): void {
        this._subs = [
            this._activatedRoute.params
                .subscribe((params: Params) => {
                    if (typeof params.meetupId === "string" && params.meetupId.length > 0) {
                        this._meetupEditorService.fetchMeetup(params.meetupId);
                    } else {
                        this.editMode = false;
                    }
                }),
            this._meetupEditorService.meetup$
                .subscribe((meetup: IMeetup) => {
                    this.meetup = meetup;
                    this._changeDetectorRef.detectChanges();
                }),
        ];
    }

    public ngOnDestroy(): void {
        this._subs.forEach((x) => x.unsubscribe);
    }

    public goBack(): void {
        if (!this._meetupEditorService.hasChanges(this.meetup)) {
            this._router.navigateByUrl("/meetup-list");
        } else {
            this._layoutService.showWarning("Потеря введенных данных предотвращена");
        }
    }

    public save(): void {
        if (this.editMode) {
            this._meetupEditorService.updateMeetup(this.meetup);
        } else {
            this._meetupEditorService.addMeetup(this.meetup);
        }
    }

    public reset(): void {
        this._meetupEditorService.reset();
    }

    public onFriendSelected(friendId: string, index: number): void {
        this.meetup.friendIds[index] = { friendId };
    }

    public removeFriend(index: number): void {
        this.meetup.friendIds.splice(index, 1);
    }

    public addFriend(): void {
        this.meetup.friendIds.push({ friendId: "" });
    }

    public onVenueSelected(row: IAutocompleteRow): void {
        this.meetup.venueId = row.id;
    }

    public onTalkSelected(talkId: string, index: number): void {
        this.meetup.sessions[index] = Object.assign(
            {},
            this.meetup.sessions[index],
            {
                talkId,
            },
        );
    }

    public onRemoveSession(index: number): void {
        this.meetup.sessions.splice(index, 1);
    }

    public tryFillEndTime(session: ISession): void {
        if (session.startTime && !session.endTime) {
            session.endTime = session.startTime.clone().add(1, "hour");
        }
    }

    public addSession(): void {
        let startTime: Moment | undefined;
        if (this.meetup.sessions.length > 0) {
            const lastSession = this.meetup.sessions[this.meetup.sessions.length - 1];
            if (lastSession.endTime) {
                startTime = lastSession.endTime.clone().add(30, "minutes");
            }
        }

        let endTime: Moment | undefined;
        if (startTime) {
            endTime = startTime.clone().add(1, "hour");
        }

        this.meetup.sessions.push({ talkId: "", startTime, endTime });
    }
}
