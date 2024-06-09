import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ChatRoomComponent } from './chatroom/chatroom.component';
import { ChatHomeComponent } from './chathome/chathome.component';

export const routes: Routes = [
  { path: '', redirectTo: '/chat-home', pathMatch: 'full' },
  { path: 'chat-home', component: ChatHomeComponent},
  { path: 'chat-room/:id', component: ChatRoomComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }
