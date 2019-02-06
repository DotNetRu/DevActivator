import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
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
}
