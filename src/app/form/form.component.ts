import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserProfile } from '../models/users';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;
  genderArray: string[] = [
    'male',
    'female',
    'hermaphrodite',
    'none of the above',
  ];
  profile!: UserProfile;
  minimumValValidation: string ='';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudservice: CrudService
  ) {}

  routeToTable() {
    this.router.navigate(['/table'], { relativeTo: this.route });
  }
  getUserForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z A-Z]*'),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
      gender: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9*#+-]+$'),
        Validators.minLength(11),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    // console.log('userForm>>>',this.userForm);

    this.userForm.get('phoneNumber')?.valueChanges.subscribe({
      next: (value:string) => {
               if (value.length < 11) {
         const minimumPhoneNumber = <FormControl>this.userForm.get('phoneNumber')
         minimumPhoneNumber.setValidators([Validators.required, Validators.minLength(11)])
        } 
      }
    })
  }

  // ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

  ngOnInit(): void {
    this.getUserForm();
  }

  submit() {
    console.log('formValues>>>', this.userForm.value);
    this.profile = this.userForm.value;
    this.crudservice.SetUser(this.profile);
    this.router.navigate(['/table'], { relativeTo: this.route });
  }
}
