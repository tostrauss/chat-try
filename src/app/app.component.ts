import { Component, OnInit, Inject } from '@angular/core';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat-try2';
  currentMessage: any;

  constructor(@Inject(MessagingService) private messagingService: MessagingService) {} // Use @Inject

  ngOnInit() {
    this.messagingService.receiveMessage();
    this.messagingService.currentMessage.subscribe((message: any) => {
      this.currentMessage = message;
    });
  }

  requestPermission() {
    this.messagingService.requestPermission();
  }
}

