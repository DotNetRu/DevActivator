import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { API_ENDPOINTS, DateConverterService, HttpService, LayoutService } from "@dotnetru/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { IApiSession } from "../meetup-editor/interfaces";
import { IApiCompositeMeetup, ICompositeMeetup, IRandomConcatModel } from "./interfaces";

@Injectable()
export class CompositeService {
    public get meetup$(): Observable<ICompositeMeetup> {
        return this._meetup$.pipe(
            filter((x) => x !== null),
            map((x) => x as ICompositeMeetup),
        );
    }

    private _meetup$: BehaviorSubject<ICompositeMeetup | null> = new BehaviorSubject<ICompositeMeetup | null>(null);

    constructor(
        private _layoutService: LayoutService,
        private _httpService: HttpService,
        private _router: Router,
    ) { }

    public fetchMeetup(meetupId: string, descriptor: IRandomConcatModel): void {
        this._httpService.post<IApiCompositeMeetup>(
            API_ENDPOINTS.getCompositeMeetupUrl.replace("{{meetupId}}", meetupId),
            descriptor,
            (res: IApiCompositeMeetup) => {
                const model: ICompositeMeetup = Object.assign({}, {
                    sessions: res.sessions.map((x: IApiSession) => Object.assign({}, x, {
                        endTime: DateConverterService.toMoment(x.endTime),
                        startTime: DateConverterService.toMoment(x.startTime),
                    })),
                    speakers: res.speakers,
                    talks: res.talks,
                });

                this._meetup$.next(model);
            });
    }
}
