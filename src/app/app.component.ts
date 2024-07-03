import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat-try2';
  currentMessage: any;

  ngOnInit(): void {
    console.log('App initialized');
  }
}
