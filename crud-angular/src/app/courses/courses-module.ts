import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses';
import { CoursesList } from './courses-list/courses-list';
import { CoursesRoutingModule } from './courses-routing-module';
import { AppMaterialModule } from '../shared/app-material/app-material-module';
import { SharedModule } from '../shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CoursesComponent, CoursesList],
  imports: [CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    SharedModule ],
})
export class CoursesModule {}
