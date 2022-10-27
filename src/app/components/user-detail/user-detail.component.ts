import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../../../model/user-data';
import { finalize } from 'rxjs';
import { fadeIn } from '../../../utils/animations';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [fadeIn]
})
export class UserDetailComponent implements OnInit {

  public userDetail!: UserData;
  public isLoading = false;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getUserId();
  }

  private getUserId(): void {
    this.route.params.subscribe(params => {
      this.getUser(+params['id'])
    })
  }

  private getUser(userId: number): void {
    this.userService.findOneById(userId)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((detail: UserData) => {
        this.userDetail = detail;
    }, () => {
      this.router.navigate(['/'])
    });
  }

  redirectToList() {
    this.router.navigate(['/']);
  }
}
