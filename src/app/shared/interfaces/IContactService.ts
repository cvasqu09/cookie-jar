import { Contact } from '../models/contact.model';

export abstract class IContactService {
  getContacts: () => Contact[];
}
