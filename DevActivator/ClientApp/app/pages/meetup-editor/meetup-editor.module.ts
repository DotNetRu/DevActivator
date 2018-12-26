import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
    MAT_DATE_LOCALE,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { CoreModule } from "@dotnetru/core";
import { FriendListModule } from "@dotnetru/friend-list";
import { TalkListModule } from "@dotnetru/talk-list";
import { VenueListModule } from "@dotnetru/venue-list";
import { MatDatetimepickerModule } from "@mat-datetimepicker/core";
import { MatMomentDatetimeModule } from "@mat-datetimepicker/moment";

import { MeetupEditorComponent } from "./meetup-editor.component";

@NgModule({
    declarations: [
        MeetupEditorComponent,
    ],
    entryComponents: [
        MeetupEditorComponent,
    ],
    exports: [
        MeetupEditorComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: "meetup-creator", component: MeetupEditorComponent },
            { path: "meetup-editor/:meetupId", component: MeetupEditorComponent },
        ]),

        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatDatepickerModule,
        MatMomentDatetimeModule,
        MatDatetimepickerModule,

        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        CoreModule,
        FriendListModule,
        VenueListModule,
        TalkListModule,
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: "ru-RU" },
    ],
})
export class MeetupEditorModule { }
