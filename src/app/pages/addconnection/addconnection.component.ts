import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { OK } from '../../interfaces/ok.interface';
import { Errors } from '../../interfaces/errors.interface';

@Component({
  selector: 'app-addconnection',
  templateUrl: './addconnection.component.html',
  styleUrls: ['./addconnection.component.scss']
})
export class AddconnectionComponent implements OnInit {

  success: boolean;
  message: string;
  finished: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.message = '';
    this.finished = false;
  }

  addConnection(username_a: string, username_b: string) {
    this.userService.add_connection_between_users(username_a, username_b)
      .subscribe((data: OK) => {
        this.message = data.message;
        this.success = data.ok;
        this.finished = true;
      }, (error: Errors) => {
        this.message = error.message;
        this.success = error.ok;
        this.finished = true;
      });
  }

}
