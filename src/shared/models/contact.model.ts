export class Contact {
  constructor(private name: string, private email: string, private phone: string) {}

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
