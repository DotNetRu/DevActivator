import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { Community } from "../meetup-editor/enums";
import { IMeetup, ISession } from "../meetup-editor/interfaces";
import { MeetupEditorService } from "../meetup-editor/meetup-editor.service";
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

    public deleteSession(index: number): void {
        this.sessions.splice(index, 1);
    }

    public onTalkSaved(talk: ITalk): void {
        if (talk.speakerIds.some((x) => {
            return !this.speakers[x.speakerId];
        })) {
            this._compositeService.fetchMeetup(this.meetupId, this.descriptor);
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
}
