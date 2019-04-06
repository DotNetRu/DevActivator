import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output,
} from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { LABELS, LayoutService, PATTERNS } from "@dotnetru/core";
import { City } from "@dotnetru/shared/city-select";
import { Subscription } from "rxjs";

import { IVenue } from "./interfaces";
import { VenueEditorService } from "./venue-editor.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [VenueEditorService],
    selector: "mtp-venue-editor",
    styleUrls: ["./venue-editor.component.css"],
    templateUrl: "./venue-editor.component.html",
})
export class VenueEditorComponent implements OnInit, OnDestroy {
    public readonly LABELS = LABELS;
    public readonly PATTERNS = PATTERNS;

    @Output() public readonly saved: EventEmitter<IVenue> = new EventEmitter<IVenue>();

    // todo: create service method getDefaultVenue
    public venue: IVenue = { id: "", city: City.Spb, name: "", address: "", mapUrl: "" };

    public editMode: boolean = true;

    protected isDialog: boolean = false;

    private _subs: Subscription[] = [];

    constructor(
        private _venueEditorService: VenueEditorService,
        private _layoutService: LayoutService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        protected _changeDetectorRef: ChangeDetectorRef,
    ) { }

    public ngOnInit(): void {
        this._subs = [
            this._activatedRoute.params
                .subscribe((params: Params) => {
                    if (typeof params.venueId === "string" && params.venueId.length > 0) {
                        this._venueEditorService.fetchVenue(params.venueId);
                    } else {
                        this.editMode = false;
                    }
                }),
            this._venueEditorService.venue$
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
            this._venueEditorService.updateVenue(this.venue, () => {
                this.saved.emit(this.venue);
                if (cb) {
                    cb(this.venue);
                }
            });
        } else {
            cb = cb || ((venue: IVenue) => {
                this._router.navigateByUrl(`venue-editor${venue ? `/${venue.id}` : ""}`);
            });
            this._venueEditorService.addVenue(this.venue, cb);
        }
    }

    public reset(): void {
        this._venueEditorService.reset();
    }
}
