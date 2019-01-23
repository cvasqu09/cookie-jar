import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // TODO: Mock out login for messaging component to determine user's messages.
    localStorage.setItem('user_id', '1');
  }
}
