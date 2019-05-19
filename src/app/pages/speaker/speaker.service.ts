import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { API_ENDPOINTS } from 'src/app/core/constants';
import { HttpService } from 'src/app/core/http.service';
import { LayoutService } from 'src/app/core/layout.service';
import { ISpeaker } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private _speaker$ = new BehaviorSubject<ISpeaker | null>(null);

  private _dataStore = {
    speaker: {} as ISpeaker,
  };

  public get speaker$(): Observable<ISpeaker> {
    return this._speaker$.pipe(
      filter((x) => x !== null),
      map((x) => x as ISpeaker),
    );
  }

  constructor(
    private _layoutService: LayoutService,
    private _httpService: HttpService,
  ) { }

  public hasChanges(speaker: ISpeaker): boolean {
    return JSON.stringify(speaker) !== JSON.stringify(this._dataStore.speaker);
  }

  public fetchSpeaker(speakerId: string): void {
    this._httpService.get<ISpeaker>(
      API_ENDPOINTS.getSpeakerUrl.replace('{{speakerId}}', speakerId),
      (speaker: ISpeaker) => {
        this._dataStore.speaker = speaker;
        this._speaker$.next(Object.assign({}, this._dataStore.speaker));
      });
  }

  public addSpeaker(speaker: ISpeaker, cb: (speaker: ISpeaker) => void): void {
    this._httpService.post<ISpeaker>(
      API_ENDPOINTS.addSpeakerUrl,
      speaker,
      (res: ISpeaker) => {
        this._layoutService.showInfo('Докладчик добавлен успешно');
        cb(res);
      },
    );
  }

  public updateSpeaker(speaker: ISpeaker, cb: () => void): void {
    this._httpService.post<ISpeaker>(
      API_ENDPOINTS.updateSpeakerUrl,
      speaker,
      (x: ISpeaker) => {
        this._layoutService.showInfo('Докладчик изменён успешно');
        this._dataStore.speaker = x;
        this._speaker$.next(Object.assign({}, this._dataStore.speaker));
        cb();
      },
    );
  }

  public reset(): void {
    this._speaker$.next(Object.assign({}, this._dataStore.speaker));
  }

  public storeSpeakerAvatar(speakerId: string, blob: Blob): void {
    const url: string = API_ENDPOINTS.storeSpeakerAvatarUrl
      .replace('{{speakerId}}', speakerId);

    const formData: FormData = new FormData();
    formData.append('formFile', blob, 'avatar.jpg');

    this._httpService.put(url, formData, () => {
      this._layoutService.showInfo('Аватар загружен успешно');
    });
  }
}
