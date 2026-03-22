import { Component, Input } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.scss',
  standalone: false
})
export class CoursesList {

  @Input() courses: Course[] = [];
  readonly displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(private router: Router,
    private route: ActivatedRoute) {

  }

    onAdd() {
    console.log('onAdd');

    this.router.navigate(['new'], { relativeTo: this.route });
    }
}
