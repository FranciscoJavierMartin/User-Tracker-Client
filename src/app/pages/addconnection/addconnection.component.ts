import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-addconnection',
  templateUrl: './addconnection.component.html',
  styleUrls: ['./addconnection.component.scss']
})
export class AddconnectionComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addConnection(username_a: string, username_b: string) {
    this.userService.add_connection_between_users(username_a, username_b)
      .subscribe((data) => console.log(data));
  }

}
