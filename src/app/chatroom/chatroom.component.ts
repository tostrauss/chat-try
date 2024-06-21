import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { ChatService } from '../chat.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatRoomComponent implements OnInit {
  @ViewChild('msgInput') msgInput!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('galleryInput') galleryInput!: ElementRef;

  messages: Message[] = [];
  user = { userId: 1, username: 'Current User' };
  userId!: number;
  showEmojiPicker = false;

  constructor(private route: ActivatedRoute, private router: Router, private chatService: ChatService) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadInitialMessages();
  }

  goBack(): void {
    this.router.navigate(['/chat-home']);  
  }

  loadInitialMessages(): void {
    this.chatService.getMessages(this.userId).subscribe((messages: Message[]) => {
      this.messages = messages;
    }, (error: any) => {
      console.error('Error fetching messages:', error);
    });
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
  
      const data = {
        sub: 'stringjshdjsidb',
        Email: 'info@tetech.website',
        conversation: newMessage
      };
  
      this.chatService.sendMessage(data).subscribe((response: any) => {
        console.log('Message sent to the backend:', response);
      }, (error: any) => {
        console.error('Error sending message:', error);
      });
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
