import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Courses {

  private readonly API = '/assets/courses2.json';
  constructor(private httpClient: HttpClient) { }
  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
