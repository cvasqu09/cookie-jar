export class Message {
  constructor(private content: string, private _timestamp: string, private me: boolean) {}

  getContent(): string {
    return this.content;
  }

  getTimestamp(): string {
    return this._timestamp;
  }

  fromMe(): boolean {
    return this.me;
  }
}
