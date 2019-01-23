export class Message {
  constructor(private name: string, private content: string, private _timestamp: string) {}
  getName(): string {
    return this.name;
  }

  getContent(): string {
    return this.content;
  }

  getTimestamp(): string {
    return this._timestamp;
  }
}
