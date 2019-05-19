import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakerEditorComponent } from './speaker-editor/speaker-editor.component';

const routes: Routes = [
  {
    path: ':speakerId',
    component: SpeakerEditorComponent
  },
  {
    path: '',
    component: SpeakerEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakerRoutingModule { }
