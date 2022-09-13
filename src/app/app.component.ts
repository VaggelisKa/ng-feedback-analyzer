import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'feedback-analyzer';

  isAuthenticated$: Observable<boolean>;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this._authService.isAuthenticated$;
  }
}
