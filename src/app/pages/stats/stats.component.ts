import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserStats } from '../../interfaces/userstats.interface';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  users_stats = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get_stats_per_user()
      .subscribe((data: UserStats) => {
        this.users_stats = data.users_stats;
      }, (error: Error) => {

      });

  }

}
