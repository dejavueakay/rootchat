import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/Person';


@Component({
  selector: 'app-username-eingabe',
  templateUrl: './username-eingabe.component.html',
  styleUrls: ['./username-eingabe.component.css']
})
export class UsernameEingabeComponent implements OnInit {
  @Input() chatMessage: string;
  @Output() submitMessage: EventEmitter<string> = new EventEmitter();

  @Input() chatUsername: string = '';

  constructor() { }

  ngOnInit() {
  }

  public addMessage(message: string, username: string): void {





    if (username) {
      this.chatMessage = '';
      
      message = `${username} schrieb am ${new Date().toLocaleString('de')}: \n${message}`;      
    
      this.submitMessage.emit(message);

    } else {
      alert('Bitte einen Nicknamen eingeben.');
    }



    /*
    if (Person.Nickname) {
      this.chatMessage = '';

      // message = `${Person.Nickname}: \n${message}`;
      // alt: message = `${Person.Nickname} schrieb am ${new Date().toLocaleString('de')}: \n${message}`;
      message = `${username} schrieb am ${new Date().toLocaleString('de')}: \n${message}`;
      
      this.submitMessage.emit(message);
    } else {
      alert('kein nickname vorhanden!');
    }
    
    if (Person.Nickname) {
      //Weiterschicken wird nur erlaubt, wenn Nickname vorhanden ist
      this.chatMessage = '';

        message = Person.Nickname  + ' \n' + message + ' <br>' +' \n' ;

        //message = `$(Person.Nickname) schrieb um $(\n$(message)`;

      this.submitMessage.emit(message);
    } else {
      alert('kein Nickname erfasst!');
    }
    */
    
    
  }

/*
  @Input() chatUsername: string;
  
  @Output() submitUsername: EventEmitter<string> = new EventEmitter();


    public addUsername(message: string): void {
      
  this.submitUsername.emit(message);

  this.chatUsername = '';
  
}
*/

}