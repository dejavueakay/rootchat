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
	nickname: string = '';


  constructor() { }

  ngOnInit() {
  }

public addMessage(message: string): void {

if (this.nickname == '') {
alert('Gib einen Nickname ein!');
	
} else {

	if (this.chatMessage.message == '') {
	alert('Gib eine Nachricht ein!');
	
	} else {

	this.messageHistory += this.nickname + ': ' + message + '\n'; 		// Nachricht zur History hinzufuegen
	this.chatMessage.message = ''; 						// Eingabefeld resetten


}
}
}

public setNickname(nick: string): void {

	this.nickname = nick;
}


}
