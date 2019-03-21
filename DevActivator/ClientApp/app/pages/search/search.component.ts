import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { IAutocompleteRow } from "@dotnetru/shared/autocomplete";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "mtp-search",
    templateUrl: "./search.component.html",
})
export class SearchPageComponent {
    constructor(
        private _router: Router,
    ) { }

    public onSpeakerSelected(speaker: IAutocompleteRow): void {
        this._router.navigateByUrl(`speaker-editor/${speaker.id}`);
    }

    public addSpeaker(): void {
        this._router.navigateByUrl(`speaker-creator`);
    }

    public onTalkSelected(talk: IAutocompleteRow): void {
        this._router.navigateByUrl(`talk-editor/${talk.id}`);
    }

    public addTalk(): void {
        this._router.navigateByUrl(`talk-creator`);
    }

    public onVenueSelected(venueId: string): void {
        this._router.navigateByUrl(`venue-editor/${venueId}`);
    }

    public addVenue(): void {
        this._router.navigateByUrl(`venue-creator`);
    }

    public onFriendSelected(friendId: string): void {
        this._router.navigateByUrl(`friend-editor/${friendId}`);
    }

    public addFriend(): void {
        this._router.navigateByUrl(`friend-creator`);
    }

    public onMeetupSelected(meetup: IAutocompleteRow): void {
        this._router.navigateByUrl(`meetup-editor/${meetup.id}`);
    }

    public addMeetup(): void {
        this._router.navigateByUrl(`meetup-creator`);
    }

    public addTimepad(): void {
        this._router.navigateByUrl(`timepad`);
    }

    public onTimepadSelected(meetup: IAutocompleteRow): void {
        this._router.navigateByUrl(`timepad/${meetup.id}`);
    }

}
