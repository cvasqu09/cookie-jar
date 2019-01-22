import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../shared/services/contact.service';
import { Contact } from '../shared/models/contact.model';
import { MessagingService } from '../shared/services/messaging.service';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  contacts: Contact[];
  @ViewChild('sidenav') sidenav;
  selectedContact: Contact;
  contactMessages: Message[];

  constructor(private contactService: ContactService, private messagingService: MessagingService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onSelectedContact(contact: Contact) {
    console.log('Received: ' + contact);
    this.selectedContact = contact;
    this.contactMessages = this.messagingService.getMessages(contact.getId());
    console.log(this.contactMessages);
    this.sidenav.toggle();
  }
}
