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
    const userId = localStorage.getItem('user_id');
    if (userId) {
      this.myMsg = this.message.getName().includes(userId);
    } else {
      this.myMsg = false;
    }
  }

  determineSide(): string {
    return this.myMsg ? 'end' : 'start';
  }

}
