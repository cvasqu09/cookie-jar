import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../shared/services/contact.service';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Output() selectContact = new EventEmitter<Contact>();
  contacts: Contact[];


  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  selectedContact(index: any) {
    console.log('Emitting: ' + this.contacts[index]);
    this.selectContact.emit(this.contacts[index]);
  }

}
