import { Injectable } from "@angular/core";
import { API_ENDPOINTS, HttpService, LayoutService } from "@dotnetru/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { ITalk } from "./interfaces";

@Injectable()
export class TalkEditorService {
    private _talk$: BehaviorSubject<ITalk | null> = new BehaviorSubject<ITalk | null>(null);
    private _dataStore = {
        talk: {} as ITalk,
    };

    public get talk$(): Observable<ITalk> {
        return this._talk$.pipe(
            filter((x) => x !== null),
            map((x) => x as ITalk),
        );
    }

    constructor(
        private _layoutService: LayoutService,
        private _httpService: HttpService,
    ) { }

    public hasChanges(talk: ITalk): boolean {
        return JSON.stringify(talk) !== JSON.stringify(this._dataStore.talk);
    }

    public fetchTalk(talkId: string): void {
        this._httpService.get<ITalk>(
            API_ENDPOINTS.getTalkUrl.replace("{{talkId}}", talkId),
            (talk: ITalk) => {
                this._dataStore.talk = talk;
                this._talk$.next(Object.assign({}, this._dataStore.talk));
            });
    }

    public addTalk(talk: ITalk, cb: (res: ITalk) => void): void {
        this._httpService.post<ITalk>(
            API_ENDPOINTS.addTalkUrl,
            talk,
            (res: ITalk) => {
                this._layoutService.showInfo("Доклад добавлен успешно");
                cb(res);
            },
        );
    }

    public updateTalk(talk: ITalk, cb: () => void): void {
        this._httpService.post<ITalk>(
            API_ENDPOINTS.updateTalkUrl,
            talk,
            (x: ITalk) => {
                this._layoutService.showInfo("Доклад изменён успешно");
                this._dataStore.talk = x;
                this._talk$.next(Object.assign({}, this._dataStore.talk));
                cb();
            },
        );
    }

    public reset(): void {
        this._talk$.next(Object.assign({}, this._dataStore.talk));
    }
}
