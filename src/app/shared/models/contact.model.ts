export class Contact {
  constructor(private userId: string, private name: string, private email: string, private phone: string) {}

  getId(): string {
    return this.userId;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }
}
