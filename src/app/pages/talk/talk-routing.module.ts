import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalkEditorComponent } from './talk-editor/talk-editor.component';

const routes: Routes = [
  {
    path: ':talkId',
    component: TalkEditorComponent
  },
  {
    path: '',
    component: TalkEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalkRoutingModule { }
