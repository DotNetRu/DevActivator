import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatExpansionModule, MatIconModule, MatListModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CoreModule } from "@dotnetru/core";
import { FriendListModule } from "@dotnetru/friend-list";
import { FriendEditorModule } from "@dotnetru/pages/friend-editor";
import { MeetupEditorModule } from "@dotnetru/pages/meetup-editor";
import { SpeakerEditorModule } from "@dotnetru/pages/speaker-editor";
import { TalkEditorModule } from "@dotnetru/pages/talk-editor";

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

        RouterModule.forChild([
            { path: "timepad", component: TimepadComponent },
            { path: "timepad/:meetupId", component: TimepadComponent },
        ]),

        CoreModule,

        DragDropModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,

        FriendListModule,
        FriendEditorModule,
        MeetupEditorModule,
        SpeakerEditorModule,
        TalkEditorModule,
    ],
})
export class TimepadModule { }
