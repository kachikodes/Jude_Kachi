import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserProfile, Users } from '../models/users';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  email: string | null = '';
  user!: UserProfile;
  users: Users[] = [
    {
      name: 'John Doe',
      age: '25',
      gender: 'Male',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },

    {
      name: 'John Doe',
      age: '25',
      gender: 'Female',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },

    {
      name: 'John Doe',
      age: '25',
      gender: 'Female',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },


    {
      name: 'John Doe',
      age: '25',
      gender: 'Male',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },

    
    {
      name: 'John Doe',
      age: '25',
      gender: 'Female',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },

    {
      name: 'John Doe',
      age: '25',
      gender: 'Male',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },

    
    {
      name: 'John Doe',
      age: '25',
      gender: 'Female',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },

    {
      name: 'John Doe',
      age: '25',
      gender: 'Male',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },

    
    {
      name: 'John Doe',
      age: '25',
      gender: 'Female',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },

    {
      name: 'John Doe',
      age: '25',
      gender: 'Male',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },

    
    {
      name: 'John Doe',
      age: '25',
      gender: 'Female',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private crudService: CrudService
  ) {
    const getUserCredentials: any = this.authService.getUserCredentials();

    const parseCredentials = JSON.parse(getUserCredentials);
    this.email = parseCredentials?.email;
    // console.log('ans', this.email)
    const extractedEmail = this.email?.split('@')[0];
    // console.log('res', extractedEmail)

    const newEmail: any = extractedEmail?.split('99')[0];
    // console.log('newEmail>>>', newEmail)

    const email: any = this.email?.split('');
    // this.email =  `${email[0]}${email[1]}${email[2]}${email[3]}${email[4]} ${email[5]}${email[6]}${email[7]}`
    console.log('email>>>', this.email);
  }

  routeToForm() {
    this.router.navigate(['/form'], { relativeTo: this.route });
  }

  routeToProfile(item: any) {
    // console.log('item>>>', item);
    this.user = item;
    this.crudService.setUserProfile(this.user);
    this.router.navigate(['/profile'], { relativeTo: this.route });
  }

  routeToLogin() {
    this.router.navigate(['/login'], { relativeTo: this.route });
  }

  getUserTable() {
    // this.users = this.crudService.getUsers();
  }

  deleteItem( id: number) {
    const deleteItem = this.users.forEach((row: any, index: number) => {
      if (id === index) {
        this.users.splice(index,1)
      }
    });
  }

  ngOnInit(): void {
    this.getUserTable();

  }
}
