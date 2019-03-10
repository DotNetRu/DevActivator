import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CoreModule } from "@dotnetru/core";
import { FriendListModule } from "@dotnetru/friend-list";
import { FriendEditorModule } from "@dotnetru/pages/friend-editor";
import { MeetupEditorModule } from "@dotnetru/pages/meetup-editor";
import { SpeakerEditorModule } from "@dotnetru/pages/speaker-editor";
import { TalkEditorModule } from "@dotnetru/pages/talk-editor";
import { VenueEditorModule } from "@dotnetru/pages/venue-editor";
import { VenueListModule } from "@dotnetru/venue-list";

import { TimepadComponent } from "./timepad.component";

@NgModule({
    declarations: [
        TimepadComponent,
    ],
    exports: [
        TimepadComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,

        RouterModule.forChild([
            { path: "timepad", component: TimepadComponent },
            { path: "timepad/:meetupId", component: TimepadComponent },
        ]),

        CoreModule,

        DragDropModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatListModule,

        FriendListModule,
        FriendEditorModule,
        MeetupEditorModule,
        SpeakerEditorModule,
        TalkEditorModule,
        VenueEditorModule,
        VenueListModule,
    ],
})
export class TimepadModule { }
