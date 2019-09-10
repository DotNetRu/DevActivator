import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { IVenue } from 'src/app/models/venue';
import { VenueService } from '../venue.service';
import { VenueEditorComponent } from './venue-editor.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [VenueService],
    selector: 'mtp-venue-editor-dialog',
    styleUrls: ['./venue-editor.component.css'],
    templateUrl: './venue-editor.component.html',
})
export class VenueEditorDialogComponent extends VenueEditorComponent implements AfterViewInit {
    constructor(
        private _dialogRef: MatDialogRef<VenueEditorDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        private _data: IVenue | undefined,
        venueService: VenueService,
        activatedRoute: ActivatedRoute,
        router: Router,
        changeDetectorRef: ChangeDetectorRef,
    ) {
        super(venueService, activatedRoute, router, changeDetectorRef);
        this.isDialog = true;
    }

    public ngAfterViewInit(): void {
        // todo: remove code duplication in VenueEditorComponent
        // find: this._venueService.venue$    .subscribe(
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
