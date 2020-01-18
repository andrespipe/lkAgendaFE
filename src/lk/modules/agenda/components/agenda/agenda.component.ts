import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/lk/services/authentication.service';

@Component({
  selector: 'lk-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  sessionId;

  ngOnInit() {
  }

  authenticate() {
    this.authService
      .login({
        email: 'animarketvet@gmail.com',
        password: 'Animarket1019',
      })
      .subscribe(ans => {
        debugger;
        console.log({ans});
      });
  }

  logOut() {
    this.authService
      .logOut(this.sessionId);
  }

}
