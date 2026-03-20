import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class Courses {

  constructor(private httpClient: HttpClient) { }
  list(): Course[] {
    return [{ _id: '1', name: 'Angular', category: 'Frontend' }];
  }
}
