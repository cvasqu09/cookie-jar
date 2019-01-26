import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { By } from '@angular/platform-browser';
import { MatListModule, MatToolbarModule } from '@angular/material';
import { MockContactService } from '../shared/mocks/mock-contact.service';
import { IContactService } from '../shared/interfaces/IContactService';

describe('ContactComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      imports: [MatListModule, MatToolbarModule],
      providers: [{provide: IContactService, useClass: MockContactService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit contact.ts when contact.ts is clicked', () => {
    // const listItems = fixture.debugElement.query(By.css('mat-list-item'));
    // debugger;
  });
});
