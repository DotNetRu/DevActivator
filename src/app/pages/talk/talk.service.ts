import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { API_ENDPOINTS } from 'src/app/core/constants';
import { HttpService } from 'src/app/core/http.service';
import { LayoutService } from 'src/app/core/layout.service';
import { IApiTalk, ITalk } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
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

  private _talk$: BehaviorSubject<ITalk | null> = new BehaviorSubject<ITalk | null>(null);
  private _dataStore = {
    talk: {} as ITalk,
  };

  public static getDefaultTalk(): ITalk {
    return Object.assign({}, {
      description: '',
      id: '',
      speakerIds: [],
      title: '',
    });
  }

  public static toTalk(apiTalk: IApiTalk): ITalk {
    return Object.assign({}, apiTalk, {
      speakerIds: apiTalk.speakerIds.map(id => ({ speakerId: id })),
    });
  }

  public static toApiTalk(talk: ITalk): IApiTalk {
    return Object.assign({}, talk, {
      speakerIds: talk.speakerIds.map(ref => ref.speakerId),
    });
  }

  public hasChanges(talk: ITalk): boolean {
    return JSON.stringify(talk) !== JSON.stringify(this._dataStore.talk);
  }

  public fetchTalk(talkId: string): void {
    this._httpService.get<IApiTalk>(
      API_ENDPOINTS.getTalkUrl.replace('{{talkId}}', talkId),
      (apiTalk: IApiTalk) => {
        this._dataStore.talk = TalkService.toTalk(apiTalk);
        this._talk$.next(Object.assign({}, this._dataStore.talk));
      });
  }

  public addTalk(talk: ITalk, cb: (res: ITalk) => void): void {
    const apiTalk = TalkService.toApiTalk(talk);
    this._httpService.post<IApiTalk>(
      API_ENDPOINTS.addTalkUrl,
      apiTalk,
      (res: IApiTalk) => {
        this._layoutService.showInfo('Доклад добавлен успешно');
        cb(TalkService.toTalk(res));
      },
    );
  }

  public updateTalk(talk: ITalk, cb: () => void): void {
    const apiTalk = TalkService.toApiTalk(talk);
    this._httpService.post<IApiTalk>(
      API_ENDPOINTS.updateTalkUrl,
      apiTalk,
      (x: IApiTalk) => {
        this._layoutService.showInfo('Доклад изменён успешно');
        this._dataStore.talk = TalkService.toTalk(x);
        this._talk$.next(Object.assign({}, this._dataStore.talk));
        cb();
      },
    );
  }

  public reset(): void {
    this._talk$.next(Object.assign({}, this._dataStore.talk));
  }
}
