import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Response } from 'src/app/component/interface/response.interface';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<Response> {

  constructor(private userService: UserService){}

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<Response> {
    return this.userService.getUser(route.paramMap.get('uuid')!);
  }
}