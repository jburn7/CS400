import { Component } from '@angular/core';
import { QUOTES } from './QUOTES_MOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  quotes = QUOTES;
}
