export class Person {
    private static _nickname: string;

    public static get Nickname(): string {
        return this._nickname;
    } // "geter"

    public static set Nickname(value: string) {
        //gibt nichts zurück
        //variable wird neuer Wert zugeteilt
        this._nickname = value;
    } // "seter" 
}