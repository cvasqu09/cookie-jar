import { Component, OnInit, ViewChild } from '@angular/core';
import { IContactService } from '../shared/interfaces/IContactService';
import { Contact } from '../shared/models/contact.model';
import { IMessagingService } from '../shared/interfaces/IMessagingService';
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

  constructor(private contactService: IContactService, private messagingService: IMessagingService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts('2');
  }

  onSelectedContact(contact: Contact) {
    console.log('Received: ' + contact);
    this.selectedContact = contact;
    this.contactMessages = this.messagingService.getMessages(contact.getId());
    console.log(this.contactMessages);
    this.sidenav.toggle();
  }
}
