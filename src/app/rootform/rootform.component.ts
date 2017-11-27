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
	lastnickname: string = '';


  constructor() { }

  ngOnInit() {
}


public addMessage(message: string): void {

if (!this.nickname) {
alert('Gib einen Nickname ein!');
	
} else {

	if (!this.chatMessage.message) {
	alert('Gib eine Nachricht ein!');
	
	} else {

		if (this.nickname == this.lastnickname) {

		this.messageHistory += message + '\n';											// Falls wieder derselbe Benutzer schreibt, brauchen wir keinen Timestamp und nickname
		this.chatMessage.message = '';

		} else {

			this.messageHistory += 'Am ' + new Date().toLocaleDateString() + ' um ' + new Date().toLocaleTimeString() + ' schrieb ' + this.nickname + ':\n\n' + message + '\n'; 		// Nachricht zur History hinzufuegen
			this.chatMessage.message = ''; 											// Eingabefeld resetten
			this.lastnickname = this.nickname; 										// Damit wir wissen, wer zuletzt geschrieben hat


			}
		}
	}
}


public setNickname(nick: string): void {

	this.nickname = nick;
	
	}


}
