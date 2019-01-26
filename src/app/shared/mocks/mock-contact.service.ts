import { Injectable } from '@angular/core';
import { IContactService } from '../interfaces/IContactService';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class MockContactService implements IContactService {
  constructor() { }

  getContacts(): Contact[] {
    const contacts: Contact[] = [
      new Contact('2', 'Karen', 'karen@test.com', '123456789'),
      new Contact('3', 'Chris', 'chris@test.com', '123456789'),
    ];

    return contacts;
  }
}
