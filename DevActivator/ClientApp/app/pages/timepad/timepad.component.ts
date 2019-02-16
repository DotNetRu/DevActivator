import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { LayoutService } from "@dotnetru/core";
import { Moment } from "moment";
import { Subscription } from "rxjs";

import { ISession } from "../meetup-editor/interfaces";
import { ITalk } from "../talk-editor/interfaces";
import { ISpeaker } from "./../speaker-editor/interfaces";
import { ICompositeMeetup, IMap, IRandomConcatModel } from "./interfaces";
import { CompositeService } from "./timepad.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CompositeService],
    selector: "mtp-timepad",
    styleUrls: ["timepad.component.css"],
    templateUrl: "timepad.component.html",
})
export class TimepadComponent implements OnInit, OnDestroy {
    public readonly timeFormat: string = "HH:mm";

    public sessions: ISession[] = [];
    public talks: IMap<ITalk> = {};
    public speakers: IMap<ISpeaker> = {};

    @Input() set meetupId(value: string) {
        this._meetupId = value;
        this._compositeService.fetchMeetup(this._meetupId, this.descriptor);
    }

    private _meetupId?: string;
    private _subs: Subscription[] = [];

    private get descriptor(): IRandomConcatModel {
        return {
            sessions: this.sessions,
            speakerIds: Object.keys(this.speakers),
            talkIds: Object.keys(this.talks),
        };
    }

    constructor(
        private _compositeService: CompositeService,
        private _layoutService: LayoutService,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
    ) { }

    public ngOnInit(): void {
        this._subs = [
            this._activatedRoute.params
                .subscribe((params: Params) => {
                    if (typeof params.meetupId === "string" && params.meetupId.length > 0) {
                        this.meetupId = params.meetupId;
                    }
                }),
            this._compositeService.meetup$
                .subscribe((data: ICompositeMeetup) => {
                    this.sessions = data.sessions;
                    this.talks = data.talks;
                    this.speakers = data.speakers;
                    this._changeDetectorRef.detectChanges();
                }),
        ];
    }

    public ngOnDestroy(): void {
        this._subs.forEach((x) => x.unsubscribe);
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
                    this.sessions[index].talkId = talkId;
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

    public drop(event: CdkDragDrop<ISession[]>) {
        moveItemInArray(this.sessions, event.previousIndex, event.currentIndex);
        // todo: normalize times
    }
}
