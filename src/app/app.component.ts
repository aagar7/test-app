import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'My App';
  testObject;
  constructor(private userService: UserService) { }

ngOnInit() {
   this.userService.getJSON().subscribe(data => {
        console.log(data);
        this.testObject = data;
    });
}
}
