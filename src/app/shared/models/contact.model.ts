export class Contact {
  constructor(private userId: string, private email: string, private phone: string) {}

  getId(): string {
    return this.userId;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }
}
