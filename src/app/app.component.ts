import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trelloAngular';
  parentMessage = "Mensaje desde parent"
  image = "https://picsum.photos/200/300"
}
