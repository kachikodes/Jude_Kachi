import { Injectable } from '@angular/core';
import { UserProfile, Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  user!: UserProfile;
  users: Users[] | any = [];
  userData: any[] = [];
  singleUser: any = {};
  constructor() {}
  // This is to pass data from the table to the profile
  public setUserProfile(item: UserProfile) {
    this.user = item;
  }
  public getUserProfile() {
    return this.user;
  }
  // to pass data from the form to the table
  public SetUser(user: UserProfile) {
    this.users.push(user);
  }

  public getUsers() {
    return this.users;
  }
  public setUsersData(data:any){
    this.userData.push(data);
  }

  public getUserData(){
    return this.userData;
  }
}
