import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule, routes } from '../app-routing.module';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ConversationComponent } from '../conversation/conversation.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, LoginComponent, ConversationComponent],
      imports: [MatToolbarModule, MatButtonModule, RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login button', () => {
    const loginButton = fixture.debugElement.query(By.css('.login-button'));
    expect(loginButton).toBeTruthy();
  });

  it('should route to the login page when the login button is pressed', () => {
    const loginButton = fixture.debugElement.query(By.css('.login-button'));
    const routerSpy = spyOn(router, 'navigate');

    loginButton.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(routerSpy).toHaveBeenCalledWith('/login');
    });
  });
});
