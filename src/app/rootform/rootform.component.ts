import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { chatMessage } from './model';

@Component({
  selector: 'app-rootform',
  templateUrl: './rootform.component.html',
  styleUrls: ['./rootform.component.css']
})

export class RootformComponent implements OnInit {

	chatMessage = new chatMessage('');
	messageHistory: string = '';



  constructor() { }

  ngOnInit() {
  }

public addMessage(message: string): void {
	
	this.messageHistory += message + '\n'; 		// Nachricht zur History hinzufuegen
	this.chatMessage.message = ''; 			// Eingabefeld resetten
}



}
