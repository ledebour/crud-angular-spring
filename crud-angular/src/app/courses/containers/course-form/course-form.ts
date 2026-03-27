import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from "../../../shared/shared-module";
import { Courses } from '../../services/courses';
import { MatSnackBar  } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
    private readonly location: Location,
    private readonly route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      _id: [''],
      name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      category: ['', [Validators.required]]
    });

  }
  ngOnInit(): void {
    const course = this.route.snapshot.data['course'];
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category
    });
    console.log(course);

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

  public getErrorMessage(fieldName: string){
    const field = this.form.get(fieldName);
    if(field?.hasError('required')){
      return 'Campo obrigatório';
    }
    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors?field.errors['minlength']['requiredLength']:5;
      return `Tamanho mínimo precisa ser ${requiredLength} caracteres`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors?field.errors['maxlength']['requiredLength']:200;
      return `Tamanho máximo precisa ser ${requiredLength} caracteres`;
    }
    return 'Campo inválido';
  }

  private onSuccess(){
    this._snackBar.open("Curso salvo com sucesso!",'',{duration:5000});
    this.onCancel();
  }

}
