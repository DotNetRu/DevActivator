import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpeakerModule } from 'src/app/pages/speaker';
import { TalkModule } from 'src/app/pages/talk/talk.module';
import { VenueModule } from 'src/app/pages/venue/venue.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  exports: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,

    SpeakerModule,
    TalkModule,
    VenueModule,
  ],
})
export class SearchModule { }
