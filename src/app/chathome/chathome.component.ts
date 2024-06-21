import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-chat-home',
  templateUrl: './chathome.component.html',
  styleUrls: ['./chathome.component.scss']
})
export class ChatHomeComponent implements OnInit {
  users: User[] = [
    { id: 1, name: 'Tobi', avatar: 'assets/avatar1.png' },
    { id: 2, name: 'Jakob', avatar: 'assets/avatar2.png' },
    { id: 3, name: 'Carlos', avatar: ''}
  ];

  filteredUsers: User[] = [];
  activeTab: string = 'users';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  filterUsers(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value;
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  goToChatRoom(user: User): void {
    this.router.navigate(['/chat-room', user.id]);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

}
