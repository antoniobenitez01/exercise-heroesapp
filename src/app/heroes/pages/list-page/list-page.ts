import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes';
import { Hero } from '../../interfaces/hero-interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.html',
  styles: ``,
  standalone : false
})
export class ListPageComponent {

  public listadoHeroes : Hero[] = []
  constructor( private heroesService : HeroesService ){}

  ngOnInit(): void{
    this.heroesService.getHeroes().subscribe( resp => {
      this.listadoHeroes = resp;
    })
  }
}
