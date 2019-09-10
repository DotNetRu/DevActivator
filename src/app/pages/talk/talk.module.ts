import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { ComponentsModule } from 'src/app/components';
import { CoreModule } from 'src/app/core';
import { SpeakerModule } from 'src/app/pages/speaker';
import { TalkEditorComponent } from './talk-editor/talk-editor.component';
import { TalkListComponent } from './talk-list/talk-list.component';
import { TalkRoutingModule } from './talk-routing.module';

@NgModule({
  declarations: [
    TalkEditorComponent,
    TalkListComponent,
  ],
  exports: [
    TalkEditorComponent,
    TalkListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TalkRoutingModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,

    CoreModule,
    ComponentsModule,
    SpeakerModule,

  ]
})
export class TalkModule { }
