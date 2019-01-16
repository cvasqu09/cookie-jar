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
      new Contact('Billy Bob', 'billybob@test.com', '123456789'),
      new Contact('Karen', 'karen@test.com', '123456789'),
      new Contact('Chris', 'chris@test.com', '123456789'),
    ];

    return contacts;
  }
}
