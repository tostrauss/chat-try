import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

interface Message {
  message: string;
  userInfo: {
    userId: number;
    username: string;
  };
  time: string;
}

@Component({
  selector: 'app-chat-room',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatRoomComponent implements OnInit {
  @ViewChild('msgInput') msgInput!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('galleryInput') galleryInput!: ElementRef<HTMLInputElement>;

  messages: Message[] = [];
  user = { userId: 1, username: 'Current User' };
  userId!: number;
  showEmojiPicker = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.messages = [
      {
        message: 'Hello there!',
        userInfo: { userId: 1, username: 'Andrew Parker' },
        time: '12:00'
      },
      {
        message: 'Hi! How are you?',
        userInfo: { userId: 2, username: 'Karen Castillo' },
        time: '12:01'
      }
    ];
  }

  goBack(): void {
    this.router.navigate(['/chat-home']);  // Adjust the route as needed
  }

  sendMessage(message: string): void {
    if (message.trim()) {
      const nd = new Date();
      const newMessage: Message = {
        message,
        userInfo: this.user,
        time: `${nd.getHours()}:${nd.getMinutes()}`
      };
      this.messages.push(newMessage);
    }
  }

  onSubmit(event: Event, input: HTMLTextAreaElement): void {
    event.preventDefault();
    this.sendMessage(input.value);
    input.value = '';
  }

  toggleEmojiPicker(): void {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: EmojiEvent): void {
    const emoji = event.emoji.native;
    this.msgInput.nativeElement.value += emoji;
  }

  openGallery(): void {
    this.galleryInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      console.log('Selected file:', file);
      const reader = new FileReader();
      reader.onload = (e) => {
        this.messages.push({
          message: `<img src="${e.target!.result}" alt="Selected Image"/>`,
          userInfo: this.user,
          time: new Date().toLocaleTimeString()
        });
      };
      reader.readAsDataURL(file);
    }
  }
}




