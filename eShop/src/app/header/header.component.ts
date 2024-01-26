import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  slogan: string = "Your one stop shop for everything.";
  imgUrl: string = "/assets/shopping.jpg";

}
