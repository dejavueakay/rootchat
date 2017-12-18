import { Component, OnInit, Input, Output } from '@angular/core';
import { chatMessage } from './model';
import { TranssocketService } from './transsocket.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-rootform',
  templateUrl: './rootform.component.html',
  styleUrls: ['./rootform.component.css'],
  providers: [TranssocketService]
})

export class RootformComponent implements OnInit {

	chatMessage = new chatMessage('');
	messageHistory: string = '';
	nickname: string = '';
	hellochat: string = '';
	formattedmessage: string = '';
	nouser: number = 0;
constructor(private chatService: TranssocketService, private cookieService: CookieService) { } 		// Hier wird Socket initiiert



  ngOnInit() {

this.chatService							// Hier lauschen wir auf Nachrichten des Servers
        .getTrans()
        .subscribe(msg => {
          this.messageHistory += msg;
        });

this.chatService
	.getTransNO()
	.subscribe(no => {
	this.nouser = no;
	});

this.nickname = this.cookieService.get('nickname');

if (this.nickname) {

	this.hellochat = '<center><b>' + this.nickname + '</b> trat dem rootchat bei.</center> <br><br>';
	this.chatService.sendTrans(this.hellochat);

	}

}
public addMessage(message: string): void {

if (!this.nickname) {
alert('Gib einen Nickname ein!');
	
} else {

	if (!this.chatMessage.message) {
	alert('Gib eine Nachricht ein!');
	
	} else {
					
		this.formattedmessage = 'Am ' + new Date().toLocaleDateString('de-DE') + ' um ' + new Date().toLocaleTimeString('de-DE') + ' schrieb <b>' + this.nickname + ':</b><br><br>' + message + '<br><br>';	// Nachricht formatieren mit nick und timestamp
		this.messageHistory += this.formattedmessage;			// Eigene Nachricht zur messageHistory hinzufuegen
		this.chatService.sendTrans(this.formattedmessage);		// Nachricht an Server schicken
		this.chatMessage.message = ''; 					// Eingabefeld resetten
		this.cookieService.set( 'nickname', this.nickname, new Date('12/2/2019 03:05:01 PM GMT-0600'));		// Nickname in einem Cookie abspeichern
			
		}
	}
}



}
