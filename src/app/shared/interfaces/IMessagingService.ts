import { Message } from '../models/message.model';

export abstract class IMessagingService {
  abstract getMessages(userId: string): Message[];
}
