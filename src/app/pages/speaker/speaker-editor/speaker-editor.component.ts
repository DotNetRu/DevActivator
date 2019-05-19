import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAcceptedFile, IRejectedFile, RejectionReason } from 'src/app/components/file-dialog';
import { FILE_SIZES, LABELS, MIME_TYPES, PATTERNS } from 'src/app/core/constants';
import { LayoutService } from 'src/app/core/layout.service';
import { ISpeaker } from 'src/app/models';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'mtp-speaker-editor',
  templateUrl: './speaker-editor.component.html',
  styleUrls: ['./speaker-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerEditorComponent implements OnInit, OnDestroy {
  public readonly LABELS = LABELS;
  public readonly PATTERNS = PATTERNS;
  public readonly AVATAR_MIME_TYPES = MIME_TYPES.JPEG;
  public readonly AVATAR_MAX_SIZE = FILE_SIZES.AVATAR_MAX_SIZE;

  @Input() public set speakerId(value: string) {
    this._speakerId = value;
    this.editMode = typeof this._speakerId === 'string' && this._speakerId.length > 0;
    this._speakerEditorService.fetchSpeaker(this._speakerId);
  }

  @Output() public readonly saved: EventEmitter<ISpeaker> = new EventEmitter<ISpeaker>();

  // todo: create service method getDefaultSpeaker
  public speaker: ISpeaker = {
    companyName: '',
    description: '',
    id: '',
    name: '',
  };

  public editMode = false;

  public isDialog = false;

  private _speakerId?: string;
  private _subs: Subscription[] = [];

  constructor(
    private _speakerEditorService: SpeakerService,
    private _layoutService: LayoutService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this._subs = [
      this._activatedRoute.params
        .subscribe((params: Params) => {
          if (typeof params.speakerId === 'string') {
            this.speakerId = params.speakerId;
          }
        }),
      this._speakerEditorService.speaker$
        .subscribe((speaker: ISpeaker) => {
          this.speaker = speaker;
          this._changeDetectorRef.detectChanges();
        }),
    ];
  }

  public ngOnDestroy(): void {
    this._subs.forEach((x) => x.unsubscribe);
  }

  public save(cb?: (speaker: ISpeaker) => void): void {
    if (this.editMode) {
      this._speakerEditorService.updateSpeaker(this.speaker, () => {
        this.saved.emit(this.speaker);
      });
    } else {
      cb = cb || ((speaker: ISpeaker) => {
        this._router.navigateByUrl(`speaker${speaker ? `/${speaker.id}` : ''}`);
      });
      this._speakerEditorService.addSpeaker(this.speaker, cb);
    }
  }

  public reset(): void {
    this._speakerEditorService.reset();
  }

  public close(): void {
    console.warn(`${this.constructor.name} => close`);
  }

  public onFilesAccepted(files: IAcceptedFile[]): void {
    for (const acceptedFile of files) {
      this._speakerEditorService.storeSpeakerAvatar(this.speaker.id, acceptedFile.file);
    }
  }

  public onFilesRejected(files: IRejectedFile[]): void {
    let msg = 'Невозможно загрузить файлы.';

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
      msg += `Типы файлов не поддерживаются [${fileTypes.join(', ')}].`;
    }

    this._layoutService.showWarning(msg);
  }
}
