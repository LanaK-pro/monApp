import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'monApp';
  h2 = 'second titre';
  paragraph = 'paragraph';
  imagePath =
    'https://images.unsplash.com/photo-1429305336325-b84ace7eba3b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  bonjour() {
    console.log('test');
  }
}
console.log('bonjour');

let age = 15;

function ageCheck() {
  //SI JE SUIS MAJEURE JE PEUX VOYAGER
  if (age >= 18) {
    console.log('je peux voyager');
  } else {
    console.log('tu ne peux pas');
  }
  //SINON JE NE PEUX PAS
}

ageCheck();
