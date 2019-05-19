import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatSidenavModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSidenavModule,
    MatIconModule,

    ComponentsModule,
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  // return document.getElementsByTagName('base')[0].href;
  return 'https://server-dotnetru.azurewebsites.net/';
}
