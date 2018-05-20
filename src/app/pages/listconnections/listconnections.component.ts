import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-listconnections',
  templateUrl: './listconnections.component.html',
  styleUrls: ['./listconnections.component.scss']
})
export class ListconnectionsComponent implements OnInit {

  users_connected=[];
  username;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.username = params['username'];
      this.userService.getUsersConnected(this.username)
      .subscribe((data: UserConnections) => {

        this.users_connected = data.user_connections;

      });
    });
  }

}

export interface UserConnections {
  user_connections: string[];
}
