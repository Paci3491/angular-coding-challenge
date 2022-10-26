import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: ':id', component: UserDetailComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
