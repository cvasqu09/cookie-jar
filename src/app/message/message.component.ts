import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  myMsg: boolean;

  constructor() { }

  ngOnInit() {
    this.myMsg = this.message.fromMe();
  }

  determineSide(): string {
    return this.myMsg ? 'end' : 'start';
  }

}
