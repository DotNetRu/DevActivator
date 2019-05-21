import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAutocompleteRow } from 'src/app/models';

@Component({
  selector: 'mtp-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  constructor(
    private _router: Router,
  ) { }

  public onSpeakerSelected(speaker: IAutocompleteRow): void {
    this._router.navigateByUrl(`speaker/${speaker.id}`);
  }
}
