import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { Courses } from '../../services/courses';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialog } from '../../../shared/components/error-dialog/error-dialog';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
  standalone: false,
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]> | null = null;
  displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(
    private readonly coursesService: Courses,
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly snackBar: MatSnackBar
  ) {

    this.refresh();
  }

  ngOnInit(): void { }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialog, {
      data: errorMsg,
    });
  }

  onAdd() {
    console.log('onAdd Courses Component');
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(course: Course) {
    console.log('onEdit Courses Component');
    this.router.navigate(['edit',course._id], { relativeTo: this.route });
  }

  onRemove(course: Course) {
    console.log('onRemove Courses Component');
    this.coursesService.remove(course._id!).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Curso removido com sucesso!', 'X', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },error => {
        this.onError('Erro ao remover curso');
      }
    );
  }

  refresh() {
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        console.error('Error fetching courses:', error);
        this.onError('Erro ao carregar cursos');
        return of([]); // ✔ CORRETO
      })
    );
  }
}
