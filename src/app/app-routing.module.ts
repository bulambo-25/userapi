import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from 'src/app/component/user/user.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UserResolver } from './service/user.resolver';
const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {
    path: 'user/:uuid',
    component: UserdetailComponent,
    resolve: { resolvedResponse: UserResolver },
  },
  //meaning that if the user type url that does not  exist it will redirect him to this //users
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
