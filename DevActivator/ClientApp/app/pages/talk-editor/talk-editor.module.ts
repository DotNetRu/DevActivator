import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CoreModule } from "@dotnetru/core";
import { SpeakerEditorModule } from "@dotnetru/pages/speaker-editor";
import { SpeakerListModule } from "@dotnetru/speaker-list";

import { TalkEditorDialogComponent } from "./talk-editor-dialog.component";
import { TalkEditorComponent } from "./talk-editor.component";

@NgModule({
    declarations: [
        TalkEditorComponent,
        TalkEditorDialogComponent,
    ],
    entryComponents: [
        TalkEditorComponent,
        TalkEditorDialogComponent,
    ],
    exports: [
        TalkEditorComponent,
        TalkEditorDialogComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: "talk-creator", component: TalkEditorComponent },
            { path: "talk-editor/:talkId", component: TalkEditorComponent },
        ]),

        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        CoreModule,
        SpeakerListModule,
        SpeakerEditorModule,
    ],
})
export class TalkEditorModule { }
