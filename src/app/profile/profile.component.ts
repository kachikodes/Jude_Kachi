import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { UserProfile } from '../models/users';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  feedbackForm!: FormGroup;
  names: string = '';
  country: string = '';
  background: string = '';
  user: UserProfile = {
    name: 'N/A',
    gender: 'N/A',
    age: 'N/A',
  };
  tableLength: number = 0;
  userProfile: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService
  ) {
    // console.log('constructorProfile>>>', this.crudService.getUserProfile());
  }

  routeToTable() {
    this.router.navigate(['/table'], { relativeTo: this.route });
  }

  getForm() {
    this.feedbackForm = new FormGroup({
      names: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      background: new FormControl('', [Validators.required]),
    });
  }

  getUserProfile() {
    if (this.user !== undefined) {
      console.log('profilepage>>>', this.crudService.getUserProfile());
      this.user = this.crudService.getUserProfile();
    }
  }

  submit(){
    const submitObj = {
      name:this.names, 
      country: this.country,
      background: this.background
    }
    this.userProfile = submitObj;
    this.crudService.setUsersData(submitObj);
    // console.log('form>>>', this.userProfile);
  }

  getTableLength(event:any){
    console.log('event>>>', event);
    this.tableLength = event;
  }

  ngOnInit(): void {
    this.getUserProfile();
   
  }
}
