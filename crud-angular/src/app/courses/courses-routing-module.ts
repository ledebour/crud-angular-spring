import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './containers/courses/courses';
import { CourseForm } from './containers/course-form/course-form';
import { coursesResolver } from './guards/courses-resolver';

const routes: Routes = [
  {path:'',component: CoursesComponent},
  {path:'new',component: CourseForm, resolve:{course: coursesResolver}},
  {path:'edit/:id',component: CourseForm, resolve:{course: coursesResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
