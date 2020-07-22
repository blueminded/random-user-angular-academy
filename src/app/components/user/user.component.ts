import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
interface MyResponse {
  results: object[];
}

export class UserComponent implements OnInit {
  user: object;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  getRandomUser(): void {
    this.userService.getRandomName().subscribe((response: MyResponse) => {
      this.user = response.results[0];
    });
  }
}
