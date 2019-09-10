import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { AutocompleteComponent } from 'src/app/components';
import { IAutocompleteRow } from 'src/app/models';
import { VenueService } from '../venue.service';

@Component({
  selector: 'mtp-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VenueListComponent implements OnInit, OnDestroy {
  @Input() public title = 'Поиск площадки';
  @Input() public iconName = 'add';
  @Input() public iconText = 'Добавить';

  @Input() public set venueLink(value: { venueId?: string }) {
    if (value && value.venueId) {
      this._venueId$.next(value.venueId);
    }
  }

  @Input() public set venueId(venueId: string | undefined) {
    if (venueId) {
      this._venueId$.next(venueId);
    }
  }

  @ViewChild('autocomplete') public autocomplete!: AutocompleteComponent;

  @Output() public readonly selected: EventEmitter<string> = new EventEmitter<string>();
  @Output() public readonly iconClicked: EventEmitter<void> = new EventEmitter<void>();

  public venues: IAutocompleteRow[] = [];

  private _venueId$: BehaviorSubject<string> = new BehaviorSubject('');
  private _subs: Subscription[] = [];

  constructor(
    private _venueService: VenueService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this._subs = [
      this._venueService.venues$
        .subscribe(
          (venues: IAutocompleteRow[]) => {
            this.venues = venues;
            this._changeDetectorRef.detectChanges();
          },
        ),
      this._venueService.venues$.pipe(switchMap((_) => this._venueId$.pipe()))
        .pipe(debounceTime(100))
        .subscribe((venueId: string) => {
          const venue = this.venues.find((x) => x.id === venueId);
          if (venue) {
            this.autocomplete.queryControl.patchValue(venue.name);
          } else {
            console.warn('venue not found', venueId);
          }
        }),
    ];

    this._venueService.fetchVenues();
  }

  public ngOnDestroy(): void {
    this._subs.forEach((x) => x.unsubscribe());
  }

  public onSelected(row: IAutocompleteRow): void {
    this.selected.emit(row.id);
  }

  public onIconClicked(): void {
    this.iconClicked.emit();
  }
}

