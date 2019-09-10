import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { API_ENDPOINTS } from 'src/app/core/constants';
import { HttpService } from 'src/app/core/http.service';
import { LayoutService } from 'src/app/core/layout.service';
import { IAutocompleteRow, ITalk } from 'src/app/models';

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

  private _talks$: BehaviorSubject<IAutocompleteRow[]> = new BehaviorSubject<IAutocompleteRow[]>([]);

  public get talks$(): Observable<IAutocompleteRow[]> {
    return this._talks$.pipe(filter((x) => x.length > 0));
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

  public hasChanges(talk: ITalk): boolean {
    return JSON.stringify(talk) !== JSON.stringify(this._dataStore.talk);
  }

  public fetchTalk(talkId: string): void {
    this._httpService.get<ITalk>(
      API_ENDPOINTS.getTalkUrl.replace('{{talkId}}', talkId),
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
        this._layoutService.showInfo('Доклад добавлен успешно');
        cb(res);
      },
    );
  }

  public updateTalk(talk: ITalk, cb: () => void): void {
    this._httpService.post<ITalk>(
      API_ENDPOINTS.updateTalkUrl,
      talk,
      (x: ITalk) => {
        this._layoutService.showInfo('Доклад изменён успешно');
        this._dataStore.talk = x;
        this._talk$.next(Object.assign({}, this._dataStore.talk));
        cb();
      },
    );
  }

  public reset(): void {
    this._talk$.next(Object.assign({}, this._dataStore.talk));
  }

  public fetchTalks(): void {
    this._httpService.get<IAutocompleteRow[]>(
      API_ENDPOINTS.getTalksUrl,
      (talks: IAutocompleteRow[]) => this._talks$.next(talks),
    );
  }
}
