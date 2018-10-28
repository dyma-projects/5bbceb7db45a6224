import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  compteur = 0;
  result = 0;
  constructor() { }

  ngOnInit() {
  }

  valeurCompteur(event) {
    this.result = event.value;
    console.log(event.value);
  }
}
