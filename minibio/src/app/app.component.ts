import { Component, OnInit } from '@angular/core';
import { Red, User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'minibio';
  isNightMode: boolean = false;
  user: User = {
    image: "../assets/nat.png",
    name: "Natalia Guerrero",
    descripcion: "Frontend developer y diseñadora💻",
    redes: [{
      name: "Mis proyectos en github",
      icon: "github",
      link: "https://github.com/NanyuB"
    },
    {
      name: "Twitter",
      icon: "twitter",
      link: "https://twitter.com/NanyuBorcloy"
    },
    {
      name: "Mi Canal de Youtube",
      icon: "youtube",
      link: "https://www.youtube.com/c/nanyuborcloy"
    },
    {
      name: "Mi linkedin",
      icon: "linkedin",
      link: "#"
    }
    ]
  }


  ngOnInit() {
    console.log(this.user.redes);
  }

  darkMode() {
    this.isNightMode = !this.isNightMode;
    document.body.classList.toggle('dark');
  }
}



