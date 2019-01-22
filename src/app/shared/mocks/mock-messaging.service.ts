import { Injectable } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MockMessagingService implements MessagingService {

  constructor() {
  }

  getMessages(userId: string): Message[] {
    return [new Message('billy bob', 'hey there', new Date(2019, 0, 13).toISOString()),
            new Message('chris', 'what you do', new Date(2019, 0, 13).toISOString()),
            new Message('billy bob', 'nothing', new Date(2019, 0, 13).toISOString()),
            new Message('chris', 'why you do', new Date(2019, 0, 13).toISOString()),
            new Message('billy bob', 'it\'s a struggle for me', new Date(2019, 0, 13).toISOString()),
            new Message('chris', 'where you do', new Date(2019, 0, 13).toISOString())
    ];

  }
}
