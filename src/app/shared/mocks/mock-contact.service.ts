import { Injectable } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class MockContactService implements ContactService {
  constructor() { }

  getContacts(): Contact[] {
    const contacts: Contact[] = [
      new Contact('1, Billy Bob', 'billybob@test.com', '123456789'),
      new Contact('2, Karen', 'karen@test.com', '123456789'),
      new Contact('3, Chris', 'chris@test.com', '123456789'),
    ];

    return contacts;
  }
}
