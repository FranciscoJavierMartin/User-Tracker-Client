import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  public getUsersConnected(username: string) {
    return this.http.get(`http://localhost:3000/userconnections/${username}`);
  }

  public get_stats_per_user() {
    console.log('Dentro de get');
    return this.http.get('http://localhost:3000/stats');
  }

  public addUserToDatabase(username: string) {
    return this.http.post(`http://localhost:3000/adduser`, {username});
  }
}
