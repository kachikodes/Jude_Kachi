import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Users } from 'src/app/models/users';
import { OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.scss'],
})
export class ChildTableComponent implements OnInit {
  users: any[] = [];

  @Input() userData: any;
  @Output() emitTableLength:EventEmitter<any> = new EventEmitter<any>()
  constructor(
    private service: CrudService
  ) {
   
  }

  emitData(){
    this.emitTableLength.emit(this.service.getUserData().length);
  }

  ngOnInit(): void {
    console.log('userDataInChild>>>', this.userData);
    this.users = this.service.getUserData();
    this.emitTableLength.emit(this.service.getUserData().length);
  }
}
