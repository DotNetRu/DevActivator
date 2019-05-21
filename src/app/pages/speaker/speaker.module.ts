import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { ComponentsModule } from 'src/app/components/components.module';
import { SpeakerEditorDialogComponent } from './speaker-editor/speaker-editor-dialog.component';
import { SpeakerEditorComponent } from './speaker-editor/speaker-editor.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerRoutingModule } from './speaker-routing.module';

@NgModule({
  declarations: [
    SpeakerEditorComponent,
    SpeakerEditorDialogComponent,
    SpeakerListComponent,
  ],
  entryComponents: [
    SpeakerEditorDialogComponent,
  ],
  exports: [
    SpeakerEditorComponent,
    SpeakerListComponent,
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
