import { Injectable } from '@angular/core';
import { Contact } from 'models/contact/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor() {}

  add(contact: Contact) {}

  get(): Promise<Contact> {
    return null;
  }

  getAll(): Promise<Contact[]> {
    return null;
  }

  update(contact: Contact) {
    return null;
  }
}
