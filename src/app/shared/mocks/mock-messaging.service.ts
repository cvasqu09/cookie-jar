import { Injectable } from '@angular/core';
import { IMessagingService } from '../interfaces/IMessagingService';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MockMessagingService implements IMessagingService {

  constructor() {
  }

  getMessages(userId: string): Message[] {
    return [new Message('hey there', new Date(2019, 0, 13).toISOString(), false),
            new Message('what you do', new Date(2019, 0, 13).toISOString(), false),
            new Message('hi', new Date(2019, 0, 13).toISOString(), true),
            new Message('why you do', new Date(2019, 0, 13).toISOString(), false),
            new Message('it\'s a struggle for me', new Date(2019, 0, 13).toISOString(), true),
            new Message('where you do', new Date(2019, 0, 13).toISOString(), false)
    ];

  }
}
