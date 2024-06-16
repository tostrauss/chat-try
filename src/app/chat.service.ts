import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://collegerecruit.us/crecruit/index.php';

  constructor(private http: HttpClient) { }

  
  getMessages(userId: number): Observable<Message[]> {

    return this.http.get<Message[]>(`${this.apiUrl}/messages?userId=${userId}`);
  }

  // Send a new message to the backend
  sendMessage(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}

