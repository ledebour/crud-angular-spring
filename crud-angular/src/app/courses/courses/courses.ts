import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
  standalone: false,
})
export class CoursesComponent implements OnInit {

courses:Course[] = [{_id:'1', name:'Angular', category:'Frontend'},];
displayedColumns: string[] = ['name', 'category'];

constructor() {
 //this.courses = [];
}
  ngOnInit(): void {

  }
}
