import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserConnectionsInterface } from '../../interfaces/userconnections.interface';

@Component({
  selector: 'app-listconnections',
  templateUrl: './listconnections.component.html',
  styleUrls: ['./listconnections.component.scss']
})
export class ListconnectionsComponent implements OnInit {

  users_connected: string[];
  username: string;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.users_connected = [];

    this.activatedRoute.params.subscribe(params => {
      this.username = params['username'];
      this.userService.get_users_connected(this.username)
      .subscribe((data: UserConnectionsInterface) => {
        this.users_connected = data.user_connections;
      });
    });
  }

}
