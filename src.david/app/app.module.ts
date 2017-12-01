import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './shared/content/content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroFormComponent } from './shared/hero-form/hero-form.component';
import { ChatBarComponent } from './chat-bar/chat-bar.component';
import { ChatHistorieComponent } from './chat-historie/chat-historie.component';
import { UsernameComponent } from './username/username.component';
import { UsernameEingabeComponent } from './username-eingabe/username-eingabe.component';
import { ChatNicknameComponent } from './chat-nickname/chat-nickname.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://senntee.ch:8085', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HeroFormComponent,
    ChatBarComponent,
    ChatHistorieComponent,
    UsernameComponent,
    UsernameEingabeComponent,
    ChatNicknameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
