import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
} from "@angular/material";
import { CoreModule } from "@dotnetru/core";
import { NavMenuModule } from "@dotnetru/navmenu";

import { ToolbarComponent } from "./toolbar.component";

@NgModule({
    declarations: [
        ToolbarComponent,
    ],
    exports: [
        ToolbarComponent,
    ],
    imports: [
        CoreModule,
        NavMenuModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatToolbarModule,
    ],
})
export class ToolbarModule { }
