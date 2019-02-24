import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FILE_SIZES, LABELS, LayoutService, MIME_TYPES, PATTERNS } from "@dotnetru/core";
import { IAcceptedFile, IRejectedFile, RejectionReason } from "@dotnetru/shared/file-dialog";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

import { FriendEditorService } from "./friend-editor.service";
import { IFriend } from "./interfaces";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FriendEditorService],
    selector: "mtp-friend-editor",
    styleUrls: ["./friend-editor.component.css"],
    templateUrl: "./friend-editor.component.html",
})
export class FriendEditorComponent implements OnInit, OnDestroy {
    public readonly LABELS = LABELS;
    public readonly PATTERNS = PATTERNS;
    public readonly AVATAR_MIME_TYPES = MIME_TYPES.PNG;
    public readonly AVATAR_MAX_SIZE = FILE_SIZES.AVATAR_MAX_SIZE;

    public friend: IFriend = FriendEditorService.getDefaultFriend();

    @Input() public suppressNavigation: boolean = false;

    @Input()
    public set friendId(value: string) {
        if (typeof value === "string" && value.length > 0) {
            this._friendEditorService.fetchFriend(value);
            this.editMode = true;
        } else {
            this.editMode = false;
        }
    }

    @Output() public readonly saved: EventEmitter<IFriend> = new EventEmitter<IFriend>();

    public editMode: boolean = false;

    private _subs: Subscription[] = [];

    constructor(
        private _friendEditorService: FriendEditorService,
        private _layoutService: LayoutService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _changeDetectorRef: ChangeDetectorRef,
    ) { }

    public ngOnInit(): void {
        this._subs = [
            this._activatedRoute.params
                .pipe(filter((x) => x.friendId))
                .subscribe((params) => this.friendId = params.friendId),
            this._friendEditorService.friend$
                .subscribe((friend: IFriend) => {
                    this.friend = friend;
                    this._changeDetectorRef.detectChanges();
                }),
        ];
    }

    public ngOnDestroy(): void {
        this._subs.forEach((x) => x.unsubscribe);
    }

    public goBack(): void {
        if (!this._friendEditorService.hasChanges(this.friend)) {
            this._router.navigateByUrl("/friend-list");
        } else {
            this._layoutService.showWarning("Потеря введенных данных предотвращена");
        }
    }

    public save(cb?: (friend: IFriend) => void): void {
        if (this.editMode) {
            this._friendEditorService.updateFriend(this.friend, () => {
                this.saved.emit(this.friend);
            });
        } else {

            if (!cb) {
                cb = ((friend: IFriend) => {
                    this.saved.emit(friend);
                    if (!this.suppressNavigation) {
                        this._router.navigateByUrl(`friend-editor${friend ? `/${friend.id}` : ""}`);
                    }
                });
            }

            this._friendEditorService.addFriend(this.friend, cb);
        }
    }

    public reset(): void {
        this._friendEditorService.reset();
    }

    public onFilesAccepted(files: IAcceptedFile[]): void {
        for (const acceptedFile of files) {
            this._friendEditorService.storeFriendAvatar(this.friend.id, acceptedFile.file);
        }
    }

    public onFilesRejected(files: IRejectedFile[]): void {
        let msg: string = "Невозможно загрузить файлы.";

        const oversized: IRejectedFile | undefined = files
            .find((x: IRejectedFile) => x.reason === RejectionReason.FileSize);
        if (oversized) {
            msg += ` Максимальный размер не должен превышать [${this.AVATAR_MAX_SIZE}].`;
        }

        // unique file types
        const fileTypes: string[] = files
            .filter((x: IRejectedFile) => x.reason === RejectionReason.FileType)
            .map((x: IRejectedFile) => x.file.type)
            .filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
        if (fileTypes.length > 0) {
            msg += `Типы файлов не поддерживаются [${fileTypes.join(", ")}].`;
        }

        this._layoutService.showWarning(msg);
    }
}
