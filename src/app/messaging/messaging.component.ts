import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {
  @Input() messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
