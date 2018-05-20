import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  lista=[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('Oninit');

    
    this.userService.get_stats_per_user()
      .subscribe((data: Data) => {
        console.log('Antes', this.lista);
        this.lista = data.users2;
        console.log('Despues', this.lista);
      });

    /*this.userService.get_stats_per_user()
    .then(result => result.json())
    .then(res => console.log(res))
    .catch(err => {
      console.error(err);
    });*/
  }

}

export interface Data {
  users2: any[];
}
