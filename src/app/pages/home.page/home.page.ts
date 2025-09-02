import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home.page',
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {

    private fb = inject(FormBuilder);
    form = this.fb.group({
      name: ['', [Validators.required]]
    })

    collections: string[] = [];
name: any;

    onSubmit() {
      if (this.form.valid) {
        let name: string = this.form.value.name || '';
        this.collections.push(name);
        console.log(this.collections);
      } else {
        alert('Name Required');
      }
    }
}
