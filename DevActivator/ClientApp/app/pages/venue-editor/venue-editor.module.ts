import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CoreModule } from "@dotnetru/core";
import { CitySelectModule } from "@dotnetru/shared/city-select";
import { SpeakerListModule } from "@dotnetru/speaker-list";

import { VenueEditorDialogComponent } from "./venue-editor-dialog.component";
import { VenueEditorComponent } from "./venue-editor.component";

@NgModule({
    declarations: [
        VenueEditorComponent,
        VenueEditorDialogComponent,
    ],
    entryComponents: [
        VenueEditorComponent,
        VenueEditorDialogComponent,
    ],
    exports: [
        VenueEditorComponent,
        VenueEditorDialogComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: "venue-creator", component: VenueEditorComponent },
            { path: "venue-editor/:venueId", component: VenueEditorComponent },
        ]),

        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        CoreModule,
        CitySelectModule,
        SpeakerListModule,
    ],
})
export class VenueEditorModule { }
