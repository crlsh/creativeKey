import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


 options= [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4",
    "Opción 5"
  ]
  selectedOption: string = '';
  spinning: boolean = false;
  

  title = 'creativeKey';


  spinWheel() {
    if (this.options.length > 0) {
      this.spinning = true;
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * this.options.length);
        this.selectedOption = this.options[randomIndex];
        this.spinning = false;
      }, 2000); // Cambia la duración según tus preferencias
    }
  }
}

