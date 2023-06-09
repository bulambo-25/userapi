import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/component/interface/response.interface';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UsersComponent implements OnInit {
  response: Response;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers(15).subscribe(
      (results: Response) => {
        console.log(results);
        this.response = results;
      }
    );
  }

}
