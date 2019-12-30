import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Heroe } from './heroe';
import { HEROES } from './mock-heroes';

// Servicio
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(private messageService: MessageService) { }

  // Devuelve un observable que emite un valor único.
  getHeroes(): Observable<Heroe[]> {
    this.messageService.add('HeroeService: fetched heroes');
    return of(HEROES);
  }

  getHeroe(id: number): Observable<Heroe> {
    this.messageService.add(`HeroeService: fetched heroe id=${id}`);
    return of(HEROES.find(heroe => heroe.id === id));
  }
}
