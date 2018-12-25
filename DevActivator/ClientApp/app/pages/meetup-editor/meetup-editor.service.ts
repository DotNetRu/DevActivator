import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { API_ENDPOINTS, DateConverterService, HttpService, LayoutService } from "@dotnetru/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { IApiMeetup, IApiSession, IMeetup, ISession } from "./interfaces";

@Injectable()
export class MeetupEditorService {
    private _meetup$: BehaviorSubject<IMeetup | null> = new BehaviorSubject<IMeetup | null>(null);
    private _dataStore = {
        meetup: {} as IMeetup,
    };

    public get meetup$(): Observable<IMeetup> {
        return this._meetup$.pipe(
            filter((x) => x !== null),
            map((x) => x as IMeetup),
        );
    }

    constructor(
        private _layoutService: LayoutService,
        private _httpService: HttpService,
        private _router: Router,
    ) { }

    public hasChanges(meetup: IMeetup): boolean {
        return JSON.stringify(meetup) !== JSON.stringify(this._dataStore.meetup);
    }

    public fetchMeetup(meetupId: string): void {
        this._httpService.get<IApiMeetup>(
            API_ENDPOINTS.getMeetupUrl.replace("{{meetupId}}", meetupId),
            (meetup: IApiMeetup) => {
                this._dataStore.meetup = this.toMeetup(meetup);
                this._meetup$.next(Object.assign({}, this._dataStore.meetup));
            });
    }

    public addMeetup(meetup: IMeetup): void {
        const data: IApiMeetup = this.toApiMeetup(meetup);
        this._httpService.post<IApiMeetup>(
            API_ENDPOINTS.addMeetupUrl,
            data,
            (x: IApiMeetup) => {
                this._layoutService.showInfo("Доклад добавлен успешно");
                this._router.navigateByUrl(`meetup-editor${meetup ? `/${meetup.id}` : ""}`);
            },
        );
    }

    public updateMeetup(meetup: IMeetup): void {
        const data: IApiMeetup = this.toApiMeetup(meetup);
        this._httpService.post<IApiMeetup>(
            API_ENDPOINTS.updateMeetupUrl,
            data,
            (x: IApiMeetup) => {
                this._layoutService.showInfo("Доклад изменён успешно");
                this._dataStore.meetup = this.toMeetup(x);
                this._meetup$.next(Object.assign({}, this._dataStore.meetup));
            },
        );
    }

    public reset(): void {
        this._meetup$.next(Object.assign({}, this._dataStore.meetup));
    }

    private toMeetup = (meetup: IApiMeetup): IMeetup => Object.assign({}, meetup, {
        sessions: meetup.sessions.map((x: IApiSession) => Object.assign({}, x, {
            endTime: DateConverterService.toMoment(x.endTime),
            startTime: DateConverterService.toMoment(x.startTime),
        })),
    })

    private toApiMeetup = (meetup: IMeetup): IApiMeetup => Object.assign({}, meetup, {
        sessions: meetup.sessions.map((x: ISession) => Object.assign({}, x, {
            endTime: DateConverterService.toApiString(x.endTime),
            startTime: DateConverterService.toApiString(x.startTime),
        })),
    })
}
