import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { LayoutService } from "@dotnetru/core";

import { ISpeaker } from "./interfaces";
import { SpeakerEditorComponent } from "./speaker-editor.component";
import { SpeakerEditorService } from "./speaker-editor.service";

export interface IDialogData {
    id?: string;
}

const successDialogResult: true = true;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [SpeakerEditorService],
    selector: "mtp-speaker-editor-dialog",
    styleUrls: ["./speaker-editor.component.css"],
    templateUrl: "./speaker-editor.component.html",
})
export class SpeakerEditorDialogComponent extends SpeakerEditorComponent {
    constructor(
        private _dialogRef: MatDialogRef<SpeakerEditorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: IDialogData,
        speakerEditorService: SpeakerEditorService,
        layoutService: LayoutService,
        activatedRoute: ActivatedRoute,
        router: Router,
        changeDetectorRef: ChangeDetectorRef,
    ) {
        super(speakerEditorService, layoutService, activatedRoute, router, changeDetectorRef);
        this.isDialog = true;
    }

    public save(cb?: (speaker: ISpeaker) => void): void {
        super.save((speaker: ISpeaker) => {
            this._dialogRef.close(speaker);
        });
    }
}
