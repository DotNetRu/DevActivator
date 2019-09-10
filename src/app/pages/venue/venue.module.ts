import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { ComponentsModule } from 'src/app/components/components.module';
import { CityNamePipe } from './city-select/city-name.pipe';
import { CitySelectComponent } from './city-select/city-select.component';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';
import { VenueRoutingModule } from './venue-routing.module';

@NgModule({
  declarations: [
    CitySelectComponent,
    VenueEditorComponent,
    CityNamePipe,
  ],
  exports: [
    CitySelectComponent,
    VenueEditorComponent,
    CityNamePipe,
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
