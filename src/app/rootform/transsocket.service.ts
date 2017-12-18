import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; 
import { Socket } from 'ng-socket-io';

@Injectable()
export class TranssocketService {

    constructor(private socket: Socket) {}

    getTrans() {
        return this.socket
            .fromEvent<any>("msg")
            .map(data => data.msg);
    }

    getTransNO() {
	return this.socket
		.fromEvent<any>("no")
		.map(data => data.no);
    }

    sendTrans(msg: string) {
        this.socket
            .emit("msg", msg);
    }



}
  
