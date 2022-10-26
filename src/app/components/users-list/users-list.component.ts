import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';
import { UserData } from '../../../model/user-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users$!: Observable<UserData[]>;

  constructor(private readonly userService: UserService,
              private router: Router) {}

  ngOnInit() {
    this.users$ = this.userService.getAll();
  }

  redirectToDetail(userId: number) {
    this.router.navigate([userId.toString()])
  }
}
