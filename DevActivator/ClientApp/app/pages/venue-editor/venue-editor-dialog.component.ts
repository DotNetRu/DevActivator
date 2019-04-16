import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { LayoutService } from "@dotnetru/core";
import { IVenue } from "./interfaces";
import { VenueEditorComponent } from "./venue-editor.component";
import { VenueEditorService } from "./venue-editor.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [VenueEditorService],
    selector: "mtp-venue-editor-dialog",
    styleUrls: ["./venue-editor.component.css"],
    templateUrl: "./venue-editor.component.html",
})
export class VenueEditorDialogComponent extends VenueEditorComponent implements AfterViewInit {
    constructor(
        private _dialogRef: MatDialogRef<VenueEditorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: IVenue | undefined,
        venueEditorService: VenueEditorService,
        layoutService: LayoutService,
        activatedRoute: ActivatedRoute,
        router: Router,
        changeDetectorRef: ChangeDetectorRef,
    ) {
        super(venueEditorService, layoutService, activatedRoute, router, changeDetectorRef);
        this.isDialog = true;
    }

    public ngAfterViewInit(): void {
        // todo: remove code duplication in VenueEditorComponent
        // find: this._venueEditorService.venue$    .subscribe(
        if (this._data) {
            this.venue = this._data;
            this.editMode = true;
            this._changeDetectorRef.detectChanges();
        }
    }

    public save(cb?: (venue: IVenue) => void): void {
        super.save((venue: IVenue) => {
            this._dialogRef.close(venue);
        });
    }

    public close(): void {
        this._dialogRef.close();
    }
}
