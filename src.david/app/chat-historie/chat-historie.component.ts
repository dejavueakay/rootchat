import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-historie',
  templateUrl: './chat-historie.component.html',
  styleUrls: ['./chat-historie.component.css']
})
export class ChatHistorieComponent implements OnInit {
  @Input() history: string;
  @Input() username: string;

  constructor() { }

  ngOnInit() {
  }

}
