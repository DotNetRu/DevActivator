import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { LayoutService } from "@dotnetru/core";
import { ITalk } from "./interfaces";
import { TalkEditorComponent } from "./talk-editor.component";
import { TalkEditorService } from "./talk-editor.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TalkEditorService],
    selector: "mtp-talk-editor-dialog",
    styleUrls: ["./talk-editor.component.css"],
    templateUrl: "./talk-editor.component.html",
})
export class TalkEditorDialogComponent extends TalkEditorComponent {
    constructor(
        private _dialogRef: MatDialogRef<TalkEditorDialogComponent>,
        talkEditorService: TalkEditorService,
        layoutService: LayoutService,
        dialog: MatDialog,
        activatedRoute: ActivatedRoute,
        router: Router,
        changeDetectorRef: ChangeDetectorRef,
    ) {
        super(talkEditorService, layoutService, dialog, activatedRoute, router, changeDetectorRef);
        this.isDialog = true;
    }

    public save(cb?: (talk: ITalk) => void): void {
        super.save((talk: ITalk) => {
            this._dialogRef.close(talk);
        });
    }

    public close(): void {
        this._dialogRef.close();
    }
}
