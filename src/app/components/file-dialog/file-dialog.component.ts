import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IAcceptedFile } from './accepted-file';
import { FileService } from './file.service';
import { IRejectedFile } from './rejected-file';
import { IVerifiedFiles } from './verified-files';

@Component({
  selector: 'mtp-file-dialog',
  templateUrl: './file-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileDialogComponent {
  @ViewChild('inputFile') public nativeInputFile?: ElementRef;

  @Input() public disabled = false;
  @Input() public accept = '';
  @Input() public multiple = true;
  @Input() public maxFileSize = 0;

  @Output() public readonly filesAccepted: EventEmitter<IAcceptedFile[]> = new EventEmitter<IAcceptedFile[]>();
  @Output() public readonly filesRejected: EventEmitter<IRejectedFile[]> = new EventEmitter<IRejectedFile[]>();

  constructor(
    private _fileService: FileService,
  ) { }

  public onNativeInputFileSelect(event: Event): void {
    this._fileService.configure(this.accept.split(',').filter((x) => x !== ''), this.maxFileSize);
    const result: IVerifiedFiles = this._fileService.verifyFiles(event);

    this.filesAccepted.emit(result.acceptedFiles);
    this.filesRejected.emit(result.rejectedFiles);

    if (this.nativeInputFile) {
      this.nativeInputFile.nativeElement.value = '';
    }

    this.preventAndStopEventPropagation(event);
  }

  public uploadFile(): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.nativeInputFile!.nativeElement.click();
  }

  private preventAndStopEventPropagation(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
