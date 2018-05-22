import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Errors } from '../../interfaces/errors.interface';
import { OK } from '../../interfaces/ok.interface';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  success: boolean;
  message: string;
  finished: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.message = '';
    this.finished = false;
  }

  addUser(username: string) {
    console.log(username);
    this.userService.add_user_to_database(username)
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
