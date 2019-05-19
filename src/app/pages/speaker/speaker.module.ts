import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { ComponentsModule } from 'src/app/components/components.module';
import { SpeakerEditorDialogComponent } from './speaker-editor/speaker-editor-dialog.component';
import { SpeakerEditorComponent } from './speaker-editor/speaker-editor.component';
import { SpeakerRoutingModule } from './speaker-routing.module';

@NgModule({
  declarations: [
    SpeakerEditorComponent,
    SpeakerEditorDialogComponent,
  ],
  entryComponents: [
    SpeakerEditorDialogComponent,
  ],
  exports: [
    SpeakerEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    SpeakerRoutingModule,
    ComponentsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ]
})
export class SpeakerModule { }
