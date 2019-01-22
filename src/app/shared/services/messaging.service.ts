import { Message } from '../models/message.model';

export abstract class MessagingService {
  abstract getMessages(userId: string): Message[];
}
