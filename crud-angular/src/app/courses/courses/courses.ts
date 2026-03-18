import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-courses',
  imports: [MatTableModule  ],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
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
