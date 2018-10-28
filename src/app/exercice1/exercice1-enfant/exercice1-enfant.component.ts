import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteur = 0;
  @Output() compteurReel = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  increment(): void {
    this.compteur += 1;
    this.compteurReel.emit({value : this.compteur});
  }

  decrement(): void {
    this.compteur -= 1;
    this.compteurReel.emit({value : this.compteur});

  }
}
