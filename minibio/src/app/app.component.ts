import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minibio';
  isNightMode: boolean = false;


  darkMode() {
    this.isNightMode = !this.isNightMode;
    document.body.classList.toggle('dark');
  }
}



