import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppMaterialModule } from '../../app-material/app-material-module';


@Component({
  selector: 'app-confirmation-dialog',
  imports: [AppMaterialModule],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss',
})
export class ConfirmationDialog {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data:string)
    {}

  onConfirm(result: boolean): void {
    this.dialogRef.close(result);
  }

}
