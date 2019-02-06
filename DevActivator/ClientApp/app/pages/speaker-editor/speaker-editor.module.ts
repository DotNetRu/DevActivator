import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CoreModule } from "@dotnetru/core";
import { FileDialogModule } from "@dotnetru/shared/file-dialog";

import { SpeakerImageUrlPipe } from "./pipes";
import { SpeakerEditorDialogComponent } from "./speaker-editor-dialog.component";
import { SpeakerEditorComponent } from "./speaker-editor.component";

@NgModule({
    declarations: [
        SpeakerEditorComponent,
        SpeakerEditorDialogComponent,
        SpeakerImageUrlPipe,
    ],
    entryComponents: [
        SpeakerEditorComponent,
        SpeakerEditorDialogComponent,
    ],
    exports: [
        SpeakerEditorComponent,
        SpeakerImageUrlPipe,
    ],
    imports: [
        RouterModule.forChild([
            { path: "speaker-creator", component: SpeakerEditorComponent },
            { path: "speaker-editor/:speakerId", component: SpeakerEditorComponent },
        ]),

        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        CoreModule,
        FileDialogModule,
    ],
})
export class SpeakerEditorModule { }
