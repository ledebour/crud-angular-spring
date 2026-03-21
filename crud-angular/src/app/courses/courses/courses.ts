import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Courses } from '../services/courses';
import { catchError, Observable } from 'rxjs';
import { ErrorDialog } from '../../shared/components/error-dialog/error-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
  standalone: false,
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['_id','name', 'category'];

  constructor(private coursesService: Courses,
    private dialog:MatDialog) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        console.error('Error fetching courses:', error);
        this.OnError('Erro ao carregar cursos');
        return [];
      })
    );

  }
  ngOnInit(): void {
  }

  OnError(errorMsg: string) {
   this.dialog.open(ErrorDialog, {
      data: errorMsg,
    });
  }
}
