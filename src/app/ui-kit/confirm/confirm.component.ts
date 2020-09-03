import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  public title: string = '';
  public message: string = '';


  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) { 
    this.title = data['title'] || '' as string;
    this.message = data['message'] || '' as string;
  }

  /**
   * Close the dialog, return true
   */
  onConfirm(): void {
    this.dialogRef.close(true);
  }

  /**
   * Close the dialog, return false
   */
  onDismiss(): void {
    this.dialogRef.close(false);
  }

}

export class ConfirmDialogModel {

  constructor(public title: string, public message: string) {
  }
}