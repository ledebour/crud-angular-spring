import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses';
import { CourseForm } from './course-form/course-form';

const routes: Routes = [
  {path:'',component: CoursesComponent},
  {path:'new',component: CourseForm}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
