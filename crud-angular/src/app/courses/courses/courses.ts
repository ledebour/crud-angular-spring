import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Courses } from '../services/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
  standalone: false,
})
export class CoursesComponent implements OnInit {
  courses:Course[] = [];
  displayedColumns: string[] = ['name', 'category'];

  constructor(private coursesService: Courses) {
  }
  ngOnInit(): void {
        this.courses = this.coursesService.list();
  }
}
