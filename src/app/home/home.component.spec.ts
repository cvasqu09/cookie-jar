import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule, routes } from '../app-routing.module';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ConversationComponent } from '../conversation/conversation.component';
import { CreateAccountComponent } from '../create-account/create-account.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: any;
  let createAccountButton;
  let loginButton;
  let routerSpy;
  let toolbar;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, LoginComponent, ConversationComponent, CreateAccountComponent],
      imports: [MatToolbarModule, MatButtonModule, RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    loginButton = fixture.debugElement.query(By.css('.login-button'));
    createAccountButton = fixture.debugElement.query(By.css('.create-account-button'));
    toolbar = fixture.debugElement.query(By.css('.header'));

    router = TestBed.get(Router);
    router.initialNavigation();
    routerSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a toolbar', () => {
    expect(toolbar).toBeTruthy();
    expect(toolbar.nativeElement.innerHTML).toContain('The Cookie Jar');
  });

  it('should have a login button', () => {
    expect(loginButton).toBeTruthy();
  });

  it('should have a create account button', () => {
    expect(createAccountButton).toBeTruthy();
  });

  it('should route to the login page when the login button is pressed', () => {
    loginButton.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(routerSpy).toHaveBeenCalledWith('/login');
    });
  });

  it('should route to the create account page when the create account button is pressed', () => {
    createAccountButton.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(routerSpy).toHaveBeenCalledWith('/create-account');
    });
  });
});
