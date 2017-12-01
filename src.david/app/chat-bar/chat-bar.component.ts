import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/Person';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {
  @Input() chatMessage: string;

  @Output() submitMessage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public addMessage(message: string): void {
        
    if (Person.Nickname) {
      //Weiterschicken wird nur erlaubt, wenn Nickname vorhanden ist
      this.chatMessage = '';

        message = Person.Nickname + ": " + message;

      this.submitMessage.emit(message);
    } else {
      alert('kein Nickname erfasst!');
    }

    
    
  }
}