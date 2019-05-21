import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
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
    AutocompleteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatInputModule,
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
    AutocompleteComponent,
  ]
})
export class ComponentsModule { }
