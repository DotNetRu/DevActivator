import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { ComponentsModule } from 'src/app/components/components.module';
import { CityNamePipe } from './city-select/city-name.pipe';
import { CitySelectComponent } from './city-select/city-select.component';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueRoutingModule } from './venue-routing.module';

@NgModule({
  declarations: [
    CitySelectComponent,
    VenueEditorComponent,
    CityNamePipe,
    VenueListComponent,
  ],
  exports: [
    CitySelectComponent,
    VenueEditorComponent,
    CityNamePipe,
    VenueListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VenueRoutingModule,

    ComponentsModule,

    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ]
})
export class VenueModule { }
