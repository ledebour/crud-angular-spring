import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses';
import { CoursesRoutingModule } from './courses-routing-module';
import { AppMaterialModule } from '../shared/app-material/app-material-module';
@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CoursesRoutingModule, AppMaterialModule ],
})
export class CoursesModule {}
