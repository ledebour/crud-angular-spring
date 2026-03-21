import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared-module";

@Component({
  selector: 'app-course-form',
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.scss',
})
export class CourseForm implements OnInit {


  form:FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [''],
      category: ['']
    });

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  onCancel(): void {
  }

}
