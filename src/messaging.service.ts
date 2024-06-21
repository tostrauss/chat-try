import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage = new BehaviorSubject<any>(null);

  constructor(private afMessaging: AngularFireMessaging) {
    this.afMessaging.messages.subscribe(
      (message) => {
        console.log(message);
        this.currentMessage.next(message);
      });
  }

  requestPermission() {
    this.afMessaging.requestToken
      .pipe(take(1))
      .subscribe(
        (token) => {
          console.log('Permission granted! Save the token to the server!', token);
         
        },
        (error) => {
          console.error(error);
        }
      );
  }

  receiveMessage() {
    this.afMessaging.messages
      .subscribe((payload) => {
        console.log("New message received. ", payload);
        this.currentMessage.next(payload);
      });
  }
}
