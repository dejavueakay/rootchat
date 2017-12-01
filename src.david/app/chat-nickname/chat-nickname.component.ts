import { Component, OnInit, Input } from '@angular/core';
import { Person } from  '../shared/models/Person';

@Component({
  selector: 'app-chat-nickname',
  templateUrl: './chat-nickname.component.html',
  styleUrls: ['./chat-nickname.component.css']
})
export class ChatNicknameComponent implements OnInit {

  @Input() nickname: string;

  constructor() { }

  ngOnInit() {
  }

  public createNickname(): void {
    alert(this.nickname);
    Person.Nickname = this.nickname;
  }

}
