import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Courses } from '../services/courses';
import { Observable, of } from 'rxjs';
import { Course } from '../model/course';

export const coursesResolver: ResolveFn<Course> = (route, state):Observable<Course> => {
  const coursesService = inject(Courses);

  if(route.params && route.params['id']){
    console.log('Resolver: ', route.params['id']);
    return coursesService.loadById(route.params['id']);
  }
  return of({_id:'',name:'',category:''});
};
