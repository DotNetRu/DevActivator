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

  public addSpeaker(): void {
    this._router.navigateByUrl('speaker');
  }

  public onTalkSelected(talk: IAutocompleteRow): void {
    this._router.navigateByUrl(`talk/${talk.id}`);
  }

  public addTalk(): void {
    this._router.navigateByUrl(`talk`);
  }

  public onVenueSelected(venueId: string): void {
    this._router.navigateByUrl(`venue/${venueId}`);
  }

  public addVenue(): void {
    this._router.navigateByUrl(`venue`);
  }
}
