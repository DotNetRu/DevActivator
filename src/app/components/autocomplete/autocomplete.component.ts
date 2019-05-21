import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material';
import { Observable } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { IAutocompleteRow } from 'src/app/models';

@Component({
  selector: 'mtp-autocomplete',
  templateUrl: './autocomplete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent {
  @Input() public title = '';
  @Input() public iconName = '';
  @Input() public iconText = '';
  @Input() public data: IAutocompleteRow[] = [];
  @Input() public clearOnSelect = false;

  @Output() public readonly selected: EventEmitter<IAutocompleteRow> = new EventEmitter<IAutocompleteRow>();
  @Output() public readonly iconClicked: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('queryInput') public queryInput!: MatInput;

  public data$: Observable<IAutocompleteRow[]>;
  public queryControl: FormControl;

  constructor() {
    this.queryControl = new FormControl(undefined);
    this.data$ = this.queryControl.valueChanges
      .pipe(
        filter((val) => typeof val === 'string'),
        debounceTime(300),
        map((query: string) => {
          const searchPhrases: string[] = (query || '')
            .toLowerCase()
            .replace(/\s+/, ' ')
            .split(' ')
            .map((x) => x.replace(/[^а-яёa-z\d]/gi, ''));
          return this.data.filter((x) => {
            const lowerName: string = x.name.toLowerCase();
            let ix = 0;
            for (const searchPhrase of searchPhrases) {
              // important order
              ix = lowerName/* .substring(ix) */.indexOf(searchPhrase);
              if (ix < 0) {
                return false;
              }
            }

            return true;
          });
        }),
      );
  }

  public onSelected(row: IAutocompleteRow): void {
    this.queryControl.patchValue(row.name);
    this.selected.emit(row);

    if (this.clearOnSelect === true) {
      this.queryControl.markAsPristine();
      this.queryControl.markAsUntouched();

      if (this.queryInput) {
        this.queryInput.value = '';
      }

      this.queryControl.setValue(null);
    }
  }

  public onIconClick(): void {
    this.iconClicked.emit();
  }
}
