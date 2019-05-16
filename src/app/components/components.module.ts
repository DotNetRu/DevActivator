import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    MenuComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  exports: [
    MenuComponent,
    ToolbarComponent,
  ]
})
export class ComponentsModule { }
