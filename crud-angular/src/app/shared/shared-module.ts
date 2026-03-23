import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material-module';
import { CategoryPipe } from './pipes/category-pipe';
import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog';
import { ErrorDialog } from './components/error-dialog/error-dialog';
@NgModule({
  imports: [CommonModule, AppMaterialModule,CategoryPipe,ConfirmationDialog,ErrorDialog],
  exports: [AppMaterialModule,CategoryPipe,ConfirmationDialog,ErrorDialog],
})
export class SharedModule {}
