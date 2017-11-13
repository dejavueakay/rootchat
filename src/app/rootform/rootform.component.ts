import { Component, OnInit } from '@angular/core';

import { Book } from './model';

@Component({
  selector: 'app-rootform',
  templateUrl: './rootform.component.html',
  styleUrls: ['./rootform.component.css']
})
export class RootformComponent implements OnInit {

  model = new Book(1, '', '', 'http://');;

  constructor() { }

  ngOnInit() {
  }

get currentBook() { return this.model.title; }


// getHeroes(): Promise<Book[]> {
//     return JSON.stringify(this.model)
//                .map (t=>t.json())
//                .toPromise()
//                .then(response => response.map(i => new Book(i.id_pk, i.heroname)))
//                .catch(this.handleError);
//   }

}
