import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LABELS, PATTERNS } from 'src/app/core/constants';
import { IAutocompleteRow, ISpeaker, ITalk } from 'src/app/models';
import { SpeakerEditorDialogComponent } from 'src/app/pages/speaker';
import { TalkService } from '../talk.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TalkService],
  selector: 'mtp-talk-editor',
  styleUrls: ['./talk-editor.component.scss'],
  templateUrl: './talk-editor.component.html',
})
export class TalkEditorComponent implements OnInit, OnDestroy {
  public readonly LABELS = LABELS;
  public readonly PATTERNS = PATTERNS;

  @Input() public set talkId(value: string) {
    this._talkId = value;
    this.editMode = typeof this._talkId === 'string' && this._talkId.length > 0;
    this._talkService.fetchTalk(this._talkId);
  }

  @Output() public readonly saved: EventEmitter<ITalk> = new EventEmitter<ITalk>();

  // todo: create service method getDefaultTalk
  public talk: ITalk = {
    description: '',
    id: '',
    speakerIds: [],
    title: '',
  };

  public editMode = false;

  protected isDialog = false;

  private _talkId?: string;
  private _subs: Subscription[] = [];

  constructor(
    private _talkService: TalkService,
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this._subs = [
      this._activatedRoute.params
        .subscribe((params: Params) => {
          if (typeof params.talkId === 'string') {
            this.talkId = params.talkId;
          }
        }),
      this._talkService.talk$
        .subscribe((talk: ITalk) => {
          this.talk = talk;
          this._changeDetectorRef.detectChanges();
        }),
    ];
  }

  public ngOnDestroy(): void {
    this._subs.forEach((x) => x.unsubscribe);
  }

  public save(cb?: (talk: ITalk) => void): void {
    if (this.editMode) {
      this._talkService.updateTalk(this.talk, () => {
        this.saved.emit(this.talk);
      });
    } else {
      cb = cb || ((talk: ITalk) => {
        this._router.navigateByUrl(`talk-editor${talk ? `/${talk.id}` : ''}`);
      });
      this._talkService.addTalk(this.talk, cb);
    }
  }

  public reset(): void {
    this._talkService.reset();
  }

  public close(): void {
    console.warn(`${this.constructor.name} => close`);
  }

  public onSpeakerSelected(row: IAutocompleteRow, index: number): void {
    this.talk.speakerIds[index] = { speakerId: row.id };
  }

  public removeSpeaker(index: number): void {
    this.talk.speakerIds.splice(index, 1);
  }

  public addSpeaker(): void {
    this.talk.speakerIds.push({ speakerId: '' });
  }

  public createSpeaker(): void {
    const dialogRef = this._dialog.open(SpeakerEditorDialogComponent, {
      panelClass: 'full-height',
      width: '640px',
    });

    dialogRef.afterClosed().subscribe((speaker?: ISpeaker) => {
      if (speaker && speaker.id) {
        this.talk.speakerIds.push({ speakerId: speaker.id });
        this._changeDetectorRef.detectChanges();
      }
    });
  }
}
