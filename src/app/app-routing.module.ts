import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'speaker',
    loadChildren: './pages/speaker/speaker.module#SpeakerModule'
  },
  {
    path: 'talk',
    loadChildren: './pages/talk/talk.module#TalkModule'
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
