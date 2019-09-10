import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { API_ENDPOINTS } from 'src/app/core/constants';
import { HttpService } from 'src/app/core/http.service';
import { LayoutService } from 'src/app/core/layout.service';
import { IAutocompleteRow, IVenue } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  private _venue$: BehaviorSubject<IVenue | null> = new BehaviorSubject<IVenue | null>(null);
  private _dataStore = {
    venue: {} as IVenue,
  };

  public get venue$(): Observable<IVenue> {
    return this._venue$.pipe(
      filter((x) => x !== null),
      map((x) => x as IVenue),
    );
  }

  private _venues$: BehaviorSubject<IAutocompleteRow[]> = new BehaviorSubject<IAutocompleteRow[]>([]);

  public get venues$(): Observable<IAutocompleteRow[]> {
    return this._venues$.pipe(filter((x) => x.length > 0));
  }

  constructor(
    private _layoutService: LayoutService,
    private _httpService: HttpService,
  ) { }

  public hasChanges(venue: IVenue): boolean {
    return JSON.stringify(venue) !== JSON.stringify(this._dataStore.venue);
  }

  public fetchVenue(venueId: string): void {
    this._httpService.get<IVenue>(
      API_ENDPOINTS.getVenueUrl.replace('{{venueId}}', venueId),
      (venue: IVenue) => {
        this._dataStore.venue = venue;
        this._venue$.next(Object.assign({}, this._dataStore.venue));
      });
  }

  public addVenue(venue: IVenue, cb: (res: IVenue) => void): void {
    this._httpService.post<IVenue>(
      API_ENDPOINTS.addVenueUrl,
      venue,
      (res: IVenue) => {
        this._layoutService.showInfo('Площадка добавлена успешно');
        cb(res);
      },
    );
  }

  public updateVenue(venue: IVenue, cb: () => void): void {
    this._httpService.post<IVenue>(
      API_ENDPOINTS.updateVenueUrl,
      venue,
      (x: IVenue) => {
        this._layoutService.showInfo('Площадка изменена успешно');
        this._dataStore.venue = x;
        this._venue$.next(Object.assign({}, this._dataStore.venue));
        cb();
      },
    );
  }

  public reset(): void {
    this._venue$.next(Object.assign({}, this._dataStore.venue));
  }

  public fetchVenues(): void {
    this._httpService.get<IAutocompleteRow[]>(
      API_ENDPOINTS.getVenuesUrl,
      (venues: IAutocompleteRow[]) => this._venues$.next(venues),
    );
  }
}
