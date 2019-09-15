import { Component, OnInit } from '@angular/core';
import { Contact } from 'models/contact/contact.interface';
import { MatTableDataSource } from '@angular/material/table';

const CONTACTS: Contact[] = [
  { firstname: 'Nasreddine', lastname: 'El Ghzaoui', phonenumber: '999999999' },
  { firstname: 'User', lastname: 'Name', phonenumber: '1111111111' },
  { firstname: 'Unknow', lastname: 'Unknow', phonenumber: '2222222222' }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'phonenumber', 'edit'];
  dataSource = new MatTableDataSource(CONTACTS);

  constructor() {}

  ngOnInit() {}

  filter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
