import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationComponent } from './conversation/conversation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { IContactService } from './shared/interfaces/IContactService';
import { MockContactService } from './shared/mocks/mock-contact.service';
import { IMessagingService } from './shared/interfaces/IMessagingService';
import { MockMessagingService } from './shared/mocks/mock-messaging.service';
import { ContactService } from './shared/services/contact.service';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'conversations', component: ConversationComponent },
  { path: 'create-account', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: IContactService, useClass: ContactService},
    {provide: IMessagingService, useClass: MockMessagingService}
  ],
})
export class AppRoutingModule { }
