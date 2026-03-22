import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../../shared/shared-module";
import { Courses } from '../../services/courses';
import { MatSnackBar  } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

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
    private readonly _snackBar: MatSnackBar,
    private readonly location: Location
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
    .subscribe(result=>this.onSuccess(),error=>this.onError());
  }

  onCancel(): void {
    console.log('onCancel');
    this.location.back();
  }

  private onError(){
    this._snackBar.open("Erro ao salvar curso",'',{duration:5000});
  }

  private onSuccess(){
    this._snackBar.open("Curso salvo com sucesso!",'',{duration:5000});
    this.onCancel();
  }

}
