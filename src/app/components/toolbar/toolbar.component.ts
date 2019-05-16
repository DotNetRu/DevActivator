import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDrawer, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { IMessage } from 'src/app/core/interfaces';
import { LayoutService } from 'src/app/core/layout.service';

@Component({
  selector: 'mtp-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  @Input() public drawer?: MatDrawer;

  public percentage = 0;
  public showProgressBar = false;

  constructor(
    private _snackBar: MatSnackBar,
    private _layoutService: LayoutService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  public getProgressMode = (): string => {
    return !this.percentage
      ? 'indeterminate'
      : (this.percentage < 100 ? 'determinate' : 'query');
  }

  ngOnInit() {
    this._layoutService.messages$.subscribe((message: IMessage) => {
      const snackBarConfig: MatSnackBarConfig<IMessage> = {
        direction: 'ltr',
        duration: message.duration,
        horizontalPosition: 'center',
        panelClass: `snack-bar-${message.severity}`,
        politeness: 'assertive',
        verticalPosition: 'top',
      };
      this._snackBar.open(message.text, 'Закрыть', snackBarConfig);
    });

    this._layoutService.progress$.subscribe((progress: boolean | number) => {
      this.showProgressBar = !!progress;
      this.percentage = this.showProgressBar && typeof progress === 'number' ? progress : 0;
      this._changeDetectorRef.detectChanges();
    });
  }
}
