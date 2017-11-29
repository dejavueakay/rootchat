export class chatMessage {
 constructor(
   public message?: string
 ) { }
 }

 export class Person {
	private static _nickname: string;

	public static get Nickname(): string {
	return this._nickname;
	}

	public static set Nickname(value: string) {
	this._nickname = value;
	}

 }


export class Test {
 constructor(
   public test?: string
 ) { }
 }
