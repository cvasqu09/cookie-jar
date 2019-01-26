import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationComponent } from './conversation.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { MaterialModule } from '../shared/material.module';
import { ContactService } from '../shared/services/contact.service';
import { MockContactService } from '../shared/mocks/mock-contact.service';
import { By } from '@angular/platform-browser';
import { Contact } from '../shared/models/contact.model';

describe('ConversationComponent', () => {
  let component: ConversationComponent;
  let fixture: ComponentFixture<ConversationComponent>;
  let contact: Contact;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationComponent, ContactsComponent ],
      imports: [MaterialModule],
      providers: [{ provide: ContactService, useClass: MockContactService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    contact = new Contact('foo', 'bar', '123');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle when onSelectedContact is run', () => {
    const sideNav = component.sidenav;
    const toggleSpy = spyOn(sideNav, 'toggle').and.callThrough();

    component.onSelectedContact(contact);

    expect(toggleSpy).toHaveBeenCalled();
  });
});
