import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ITalk, TalkEditorDialogComponent } from "@dotnetru/pages/talk-editor";
import { IAutocompleteRow } from "@dotnetru/shared/autocomplete";

import { ISession } from "./interfaces";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "mtp-session-editor",
    styleUrls: ["./session-editor.component.css"],
    templateUrl: "./session-editor.component.html",
})
export class SessionEditorComponent {
    @Input() public title: string = "";

    @Input()
    public get session(): ISession {
        return this._session;
    }
    public set session(value: ISession) {
        this._session = Object.assign({}, value);
    }

    @Output() public readonly talkSelected = new EventEmitter<string>();
    @Output() public readonly removeSession = new EventEmitter<void>();

    private _session: ISession = { talkId: "" };

    constructor(
        private _dialog: MatDialog,
        private _changeDetectorRef: ChangeDetectorRef,
    ) { }

    public onTalkSelected(row: IAutocompleteRow): void {
        this.talkSelected.emit(row.id);
    }

    public onRemoveSession(): void {
        this.removeSession.emit();
    }

    public tryFillEndTime(): void {
        if (this.session.startTime && !this.session.endTime) {
            this.session.endTime = this.session.startTime.clone().add(1, "hour");
        }
    }

    public createTalk(): void {
        const dialogRef = this._dialog.open(TalkEditorDialogComponent, {
            panelClass: "full-height",
            width: "640px",
        });

        dialogRef.afterClosed().subscribe((talk?: ITalk) => {
            if (talk && talk.id) {
                this.talkSelected.emit(talk.id);
            }
        });
    }
}
