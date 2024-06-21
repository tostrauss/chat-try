import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app.routing.module';
import { ChatHomeComponent } from './chathome/chathome.component';
import { ChatRoomComponent } from './chatroom/chatroom.component';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { environment } from '../environment';
import { MessagingService } from '../messaging.service'; 

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
    EmojiModule,
    PickerComponent,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireMessagingModule
  ],
  providers: [MessagingService], 
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

