import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My App';
  testObject;

  constructor(private userService: UserService) {
    this.userService.getJSON().subscribe(data => {
      this.testObject = data;
    });
  }

}
