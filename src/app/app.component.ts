import { Component } from '@angular/core';
import { PRODUCTES } from './mock-products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-store';
  
  productes = PRODUCTES;
}
