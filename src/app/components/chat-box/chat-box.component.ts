import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.sass']
})
export class ChatBoxComponent implements OnInit {

  message: string = "";
  messages: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public sendMessage() {
    this.messages.push(this.message);
    this.message = "";
  }
}
