export class Message {
  constructor(private name: string, private content: string, private _timestamp: string) {}
  getName(): string {
    return this.name;
  }

  getContent(): string {
    return this.content;
  }

  get timestamp(): string {
    return this._timestamp;
  }
}
