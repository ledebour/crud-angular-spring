import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesRoutingModule } from './courses-routing-module';
@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CoursesRoutingModule, MatTableModule, MatCardModule, MatToolbarModule ],
})
export class CoursesModule {}
