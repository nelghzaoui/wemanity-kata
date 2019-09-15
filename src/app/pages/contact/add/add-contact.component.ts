import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'models/contact/contact.interface';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      phonenumber: [
        '',
        [Validators.required, Validators.pattern('[0-9 +]*'), Validators.minLength(10)]
      ]
    });
  }

  onSave() {
    if (this.form.valid) {
      //TODO:CALL TO ADD USER IN DATABASE
    }
  }

  getErrorMessage(fieldName: string) {
    switch (fieldName) {
      case 'lastname':
        return this.lastname.hasError('required') ? 'You must enter a value' : '';
      case 'firstname':
        return this.firstname.hasError('required') ? 'You must enter a value' : '';
      case 'phonenumber':
        return this.phonenumber.hasError('required')
          ? 'You must enter a value'
          : this.phonenumber.hasError('pattern')
          ? 'Not a valid entry'
          : '';
      default:
        console.log('Something went wrong !');
        break;
    }
  }

  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }
  get phonenumber() {
    return this.form.get('phonenumber');
  }
}
