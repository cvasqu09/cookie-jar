import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationComponent } from './conversation.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { MaterialModule } from '../../shared/material.module';
import { ContactService } from '../../shared/services/contact.service';
import { MockContactService } from '../../shared/mocks/mock-contact.service';

describe('ConversationComponent', () => {
  let component: ConversationComponent;
  let fixture: ComponentFixture<ConversationComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
