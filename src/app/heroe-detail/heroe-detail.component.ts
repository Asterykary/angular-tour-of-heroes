import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../heroe';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroeService } from '../heroe.service';


@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  heroe: Heroe;

  constructor(private route: ActivatedRoute,
              private heroeService: HeroeService,
              private location: Location) { }

  ngOnInit(): void {
    this.getHeroe();
  }

  getHeroe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroeService.getHeroe(id)
    .subscribe(heroe => this.heroe = heroe);
  }

  goBack(): void {
    this.location.back();
  }

}
