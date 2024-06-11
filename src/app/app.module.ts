import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ChatHomeComponent } from './chathome/chathome.component';
import { ChatRoomComponent } from './chatroom/chatroom.component';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';


@NgModule({
  declarations: [
    AppComponent,
    ChatHomeComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    EmojiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
