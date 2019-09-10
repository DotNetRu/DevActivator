import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LABELS, PATTERNS } from 'src/app/core/constants';
import { City, IVenue } from 'src/app/models';
import { VenueService } from '../venue.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [VenueService],
  selector: 'mtp-venue-editor',
  styleUrls: ['./venue-editor.component.scss'],
  templateUrl: './venue-editor.component.html',
})
export class VenueEditorComponent implements OnInit, OnDestroy {
  public readonly LABELS = LABELS;
  public readonly PATTERNS = PATTERNS;

  @Output() public readonly saved: EventEmitter<IVenue> = new EventEmitter<IVenue>();

  // todo: create service method getDefaultVenue
  public venue: IVenue = { id: '', city: City.Spb, name: '', address: '', mapUrl: '' };

  public editMode = true;

  protected isDialog = false;

  private _subs: Subscription[] = [];

  constructor(
    private _venueService: VenueService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    protected _changeDetectorRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this._subs = [
      this._activatedRoute.params
        .subscribe((params: Params) => {
          if (typeof params.venueId === 'string' && params.venueId.length > 0) {
            this._venueService.fetchVenue(params.venueId);
          } else {
            this.editMode = false;
          }
        }),
      this._venueService.venue$
        .subscribe((venue: IVenue) => {
          this.venue = venue;
          this._changeDetectorRef.detectChanges();
        }),
    ];
  }

  public ngOnDestroy(): void {
    this._subs.forEach((x) => x.unsubscribe);
  }

  public save(cb?: (venue: IVenue) => void): void {
    if (this.editMode) {
      this._venueService.updateVenue(this.venue, () => {
        this.saved.emit(this.venue);
        if (cb) {
          cb(this.venue);
        }
      });
    } else {
      cb = cb || ((venue: IVenue) => {
        this._router.navigateByUrl(`venue${venue ? `/${venue.id}` : ''}`);
      });
      this._venueService.addVenue(this.venue, cb);
    }
  }

  public reset(): void {
    this._venueService.reset();
  }

  public close(): void {
    console.warn(`${this.constructor.name} => close`);
  }
}
