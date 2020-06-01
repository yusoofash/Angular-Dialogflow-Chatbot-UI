import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbChatModule, NbListModule } from '@nebular/theme';
import { ChatUiComponent } from './chat-ui/chat-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatUiComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbChatModule,
    NbListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
