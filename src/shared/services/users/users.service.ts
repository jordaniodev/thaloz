import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public list() {
    return this.httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}
