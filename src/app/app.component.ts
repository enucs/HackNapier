import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hack-napier';

  constructor(private router: Router) {}

  navigateToRegisterForm = () => {
    window.location.href = 'https://forms.gle/rTbJbixqPHpoDNgS9';
  };
}
