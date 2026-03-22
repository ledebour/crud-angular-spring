import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.scss',
  standalone: false
})
export class CoursesList {

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor() {

  }

  onAdd() {
    console.log('onAdd Courses List Component');
    this.add.emit(true);
  }

  onEdit(course: Course) {
    console.log('onEdit Courses List Component');
    this.edit.emit(course);
  }
}
