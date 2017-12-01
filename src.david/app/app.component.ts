import { Component } from '@angular/core';
import { SocketServiceService } from './socket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketServiceService]
})
export class AppComponent {

 public messageHistory: string = '';
 public formattedmsg: string = '';
 
constructor(private chatService : SocketServiceService) { } // Constructor stellt sicher, das Verbindung zum Socket beim Laden hergestellt wird

  ngOnInit() { 		// Life-Cycle-Hook (google), hier werden Nachrichten empfangen und zur messagehistory geschrieben

    this.chatService
    .getMsg()
    .subscribe(msg => {
      this.messageHistory += msg;
    });
  }
  
  

  public onSubmitMessage($event): void {

    this.formattedmsg = $event + '\n';
    this.messageHistory += this.formattedmsg;
    this.chatService.sendMsg(this.formattedmsg);	// Hier werden Nachrichten an der Server geschickt

  }

  public usernameHistory: string = '';

  public onSubmitUsername($event): void {
    this.usernameHistory += $event + '';
  }
   

    public title = 'hsg chat-app';
  
}



