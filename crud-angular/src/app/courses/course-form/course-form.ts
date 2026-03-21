import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared-module";
import { Courses } from '../services/courses';
import { MatSnackBar  } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  imports: [SharedModule, ReactiveFormsModule ],
  templateUrl: './course-form.html',
  styleUrl: './course-form.scss',
  standalone: true
})
export class CourseForm implements OnInit {


  form:FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
    private readonly service: Courses,
    private readonly _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      category: ['']
    });

  }
  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.form.value);
    this.service.save(this.form.value)
    .subscribe(result=>console.log(result),error=>this.onError());
  }

  onCancel(): void {
    console.log('onCancel');
  }

  private onError(){
    this._snackBar.open("Erro ao salvar curso",'',{duration:5000});
  }

}
