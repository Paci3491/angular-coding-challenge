import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  public readonly users$ = this.userService.getAll();

  constructor(private readonly userService: UserService) {
  }
}
