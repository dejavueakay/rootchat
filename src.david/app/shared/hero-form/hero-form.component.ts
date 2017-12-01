import { Component } from '@angular/core';
import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

  model = new Hero('Hier kannst du etwas eingeben.');

  submitted = false;

  onSubmit() { this.submitted = true; }
  get eingabe() { return JSON.stringify(this.model.name); }
}
