import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';

const routes: Routes = [
    {
        path: ':venueId',
        component: VenueEditorComponent
    },
    {
        path: '',
        component: VenueEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VenueRoutingModule {
}
