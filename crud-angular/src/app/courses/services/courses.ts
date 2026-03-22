import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import {  delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Courses {

  private readonly API = 'api/courses';
  constructor(private readonly httpClient: HttpClient) { }
  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(2000),
      tap(courses => console.log(courses))
    );
  }

  loadById(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${this.API}/${id}`).pipe(first());
  }

  save(record:Course){
    console.log(record);
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }
}
