import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher, Hero } from '../../interfaces/hero-interface';
import { HeroesService } from '../../services/heroes';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-new-page',
  standalone : false,
  templateUrl: './new-page.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  constructor(
    private heroesService : HeroesService,
    private router : Router,
    private snackbar : MatSnackBar,
    private dialog : MatDialog
  ){}

  public heroForm = new FormGroup({
    id : new FormControl(''),
    superhero : new FormControl('', { nonNullable: true}),
    publisher : new FormControl<Publisher>(Publisher.DCComics),
    alter_ego : new FormControl(''),
    first_appearance : new FormControl(''),
    characters : new FormControl(''),
    alt_img : new FormControl('')
  });

  ngOnInit(): void {

    if (this.router.url.includes('edit')) {
      const id = this.router.url.split('/').pop();
      if( !id ) return;

      this.heroesService.getHeroById( id )
        .subscribe( hero => {
          if(!hero){
            console.log(`Héroe con ID [${id}] no encontrado.`);
            this.router.navigate(['/heroes']);
            return;
          }
          this.heroForm.reset( hero );
        });
    };

  }

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Cómics'},
    { id: 'Marvel Comics', desc: 'Marvel - Cómics'}
  ];

  get currentHero() : Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit() : void {

    if (this.heroForm.invalid) return;

    if ( this.currentHero.id ) {
      this.heroesService.updateHero(this.currentHero)
        .subscribe( hero => {
          this.showSnackBar(`${ hero.superhero } updated!`)
          this.router.navigate(['/heroes']);
        });
      return;
    }

    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        this.showSnackBar(`${ hero.superhero } created!`)
        this.router.navigate(['/heroes']);
      });

  }

  private showSnackBar( message : string) : void {
    this.snackbar.open( message, 'OK', {
      duration : 1500
    })
  }

  public onDeleteHero(){
    if (!this.currentHero.id) throw Error("Hero ID is required");
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });
    dialogRef.afterClosed().subscribe( result => {
      if ( !result ) return;
      console.log(`${this.currentHero.superhero} has been deleted.`);
      this.router.navigate(['/heroes']);
    });
  }
}
