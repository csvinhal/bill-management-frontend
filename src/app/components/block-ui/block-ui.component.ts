import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

import { BlockUiService } from './block-ui.service';

@Component({
  selector: 'app-block-ui',
  template: '',
})
export class BlockUiComponent implements OnInit {
  private _dialogRef: MatDialogRef<DialogComponent>;
  config: MatDialogConfig = {
    disableClose: true,
  };

  constructor(private dialog: MatDialog, private blockUiService: BlockUiService) {}

  ngOnInit() {
    this.blockUiService.getIsLoading().subscribe((loading: boolean) => {
      if (loading) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    });
  }

  openDialog() {
    this._dialogRef = this.dialog.open(DialogComponent, this.config);
  }

  closeDialog() {
    this._dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog',
  template: `
  <div class="container">
    <div>
      <mat-spinner diameter="35"></mat-spinner>
    </div>
    <div class="loading">Loading</div>
  </div>`,
  styles: [
    `
      .mat-dialog-container {
        padding: 12px 12px 12px 29px !important;
      }

      div.container {
        display: flex;
      }

      div.container {
        width: 10.8em;
        height: 2.4em;
      }

      .loading {
        padding: 0.9em 2em;
      }

      .loading:after {
        overflow: hidden;
        display: inline-block;
        vertical-align: bottom;
        -webkit-animation: ellipsis steps(4, end) 900ms infinite;
        animation: ellipsis steps(4, end) 900ms infinite;
        content: '\\2026'; /* ascii code for the ellipsis character */
        width: 0px;
      }

      @keyframes ellipsis {
        to {
          width: 1.25em;
        }
      }

      @-webkit-keyframes ellipsis {
        to {
          width: 1.25em;
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
