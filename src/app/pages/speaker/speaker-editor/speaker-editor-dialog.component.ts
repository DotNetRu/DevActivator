import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/core/layout.service';
import { ISpeaker } from 'src/app/models';
import { SpeakerService } from '../speaker.service';
import { SpeakerEditorComponent } from './speaker-editor.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mtp-speaker-editor-dialog',
  styleUrls: ['./speaker-editor.component.scss'],
  templateUrl: './speaker-editor.component.html',
})
export class SpeakerEditorDialogComponent extends SpeakerEditorComponent {
  constructor(
    private _dialogRef: MatDialogRef<SpeakerEditorDialogComponent>,
    speakerEditorService: SpeakerService,
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

  public close(): void {
    this._dialogRef.close();
  }
}
