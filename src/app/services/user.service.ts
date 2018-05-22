import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  SERVER,
  USER_CONNECTIONS_API,
  STATS_API,
  ADD_USER_API,
  ADD_CONNECTION_USERS_API
} from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  public get_users_connected(username: string) {
    return this.http.get(`${SERVER}/${USER_CONNECTIONS_API}/${username}`);
  }

  public get_stats_per_user() {
    return this.http.get(`${SERVER}/${STATS_API}`);
  }

  public add_user_to_database(username: string) {
    return this.http.post(`${SERVER}/${ADD_USER_API}`, {username});
  }

  public add_connection_between_users(username_a: string, username_b: string) {
    return this.http.put(`${SERVER}/${ADD_CONNECTION_USERS_API}`, { username_a, username_b});
  }
}
