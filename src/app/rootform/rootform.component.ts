import { Component, OnInit } from '@angular/core';

import { chatMessage } from './model';

@Component({
  selector: 'app-rootform',
  templateUrl: './rootform.component.html',
  styleUrls: ['./rootform.component.css']
})

export class RootformComponent implements OnInit {

	chatMessage = new chatMessage('');;

  constructor() { }

  ngOnInit() {
  }



public addMessage(message: string): void {
	alert(message);

	this.chatMessage.message = '';
}


}
