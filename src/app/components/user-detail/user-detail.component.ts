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
  animations: [ fadeIn ]
})
export class UserDetailComponent implements OnInit {

  private userId!: string;
  public userDetail!: UserData;
  public isLoading = false;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getUserId();
    this.getUser();
  }

  private getUserId(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    })
  }

  private getUser(): void {
    this.userService.findOneById(+this.userId)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((detail: UserData) => {
        this.userDetail = detail;
    }, () => {
      this.router.navigate([''])
    });
  }
}
