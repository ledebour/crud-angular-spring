import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Courses } from '../services/courses';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialog } from '../../shared/components/error-dialog/error-dialog';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
  standalone: false,
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(
    private coursesService: Courses,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        console.error('Error fetching courses:', error);
        this.onError('Erro ao carregar cursos');
        return of([]); // ✔ CORRETO
      })
    );
  }

  ngOnInit(): void {}

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialog, {
      data: errorMsg,
    });
  }

      onAdd() {
    console.log('onAdd');

    this.router.navigate(['new'], { relativeTo: this.route });
    }


}
