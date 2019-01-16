import { Contact } from '../models/contact.model';

export abstract class ContactService {
  getContacts: () => Contact[];
}
