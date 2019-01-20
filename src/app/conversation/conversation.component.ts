import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../shared/services/contact.service';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  contacts: Contact[];
  @ViewChild('sidenav') sidenav;
  selectedContact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onSelectedContact(contact: Contact) {
    console.log('Received: ' + contact);
    this.selectedContact = contact;
    this.sidenav.toggle();
  }
}
