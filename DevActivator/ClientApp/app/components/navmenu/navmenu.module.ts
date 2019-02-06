import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatMenuModule } from "@angular/material";
import { RouterModule } from "@angular/router";

import { NavMenuComponent } from "./navmenu.component";

@NgModule({
    declarations: [
        NavMenuComponent,
    ],
    exports: [
        NavMenuComponent,
    ],
    imports: [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
    ],
})
export class NavMenuModule { }
