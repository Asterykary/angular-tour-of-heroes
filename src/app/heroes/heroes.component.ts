import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHeroe: Heroe;

  constructor() { }


  ngOnInit() {
  }

  onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }

}

