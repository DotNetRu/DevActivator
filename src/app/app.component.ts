import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'devactivator';

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
  ) {
    this.addSvgIcon('meetup');
  }

  private addSvgIcon(name: string) {
    this._matIconRegistry.addSvgIcon(name, this._domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${name}.svg`));
  }
}
