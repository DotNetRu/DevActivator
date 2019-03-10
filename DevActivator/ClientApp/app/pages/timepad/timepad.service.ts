import { Injectable } from "@angular/core";
import { API_ENDPOINTS, DateConverterService, HttpService } from "@dotnetru/core";
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
        private _httpService: HttpService,
    ) { }

    public fetchMeetup(meetupId: string | undefined, descriptor: IRandomConcatModel, cb?: () => void): void {
        this._httpService.post<IApiCompositeMeetup>(
            API_ENDPOINTS.getCompositeMeetupUrl.replace("{{meetupId}}", meetupId || ""),
            descriptor,
            (res: IApiCompositeMeetup) => {
                const model: ICompositeMeetup = this.toCompositeMeetup(meetupId, res);
                this._meetup$.next(model);
                if (cb) {
                    cb();
                }
            });
    }

    public saveMeetup(meetupId: string | undefined, descriptor: IRandomConcatModel, cb?: () => void): void {
        this._httpService.post<IApiCompositeMeetup>(
            API_ENDPOINTS.saveCompositeMeetupUrl.replace("{{meetupId}}", meetupId || ""),
            descriptor,
            (res: IApiCompositeMeetup) => {
                const model: ICompositeMeetup = this.toCompositeMeetup(meetupId, res);
                this._meetup$.next(model);
                if (cb) {
                    cb();
                }
            });
    }

    private toCompositeMeetup(meetupId: string | undefined, data: IApiCompositeMeetup): ICompositeMeetup {
        return Object.assign({}, {
            id: meetupId,
            name: data.name,
            communityId: data.communityId,
            venue: data.venue,
            friends: data.friends,
            sessions: data.sessions.map((x: IApiSession) => Object.assign({}, x, {
                endTime: DateConverterService.toMoment(x.endTime),
                startTime: DateConverterService.toMoment(x.startTime),
            })),
            speakers: data.speakers,
            talks: data.talks,
        });
    }
}
