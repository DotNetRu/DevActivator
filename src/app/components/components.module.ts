import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FileDialogComponent } from './file-dialog/file-dialog.component';
import { MenuComponent } from './menu/menu.component';
import { PatternErrorMessagePipe } from './pipes/pattern-error-message.pipe';
import { RequiredErrorMessagePipe } from './pipes/required-error-message.pipe';
import { SpeakerImageUrlPipe } from './pipes/speaker-image-url.pipe';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    MenuComponent,
    ToolbarComponent,
    FileDialogComponent,
    SpeakerImageUrlPipe,
    RequiredErrorMessagePipe,
    PatternErrorMessagePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  exports: [
    MenuComponent,
    ToolbarComponent,
    FileDialogComponent,
    SpeakerImageUrlPipe,
    RequiredErrorMessagePipe,
    PatternErrorMessagePipe,
  ]
})
export class ComponentsModule { }
