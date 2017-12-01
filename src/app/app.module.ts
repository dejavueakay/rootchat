import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RootformComponent } from './rootform/rootform.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import {NgxAutoScroll} from 'ngx-auto-scroll/lib/ngx-auto-scroll.directive';
import { CookieService } from 'ngx-cookie-service';

import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

const config: SocketIoConfig = { url: 'http://senntee.ch:8080', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    RootformComponent,
    NgxAutoScroll
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
