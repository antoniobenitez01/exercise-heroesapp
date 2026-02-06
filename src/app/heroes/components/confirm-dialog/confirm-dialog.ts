import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Hero } from '../../interfaces/hero-interface';
import { HeroesService } from '../../services/heroes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.html',
  styles: [],
  standalone: false
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef : MatDialogRef<ConfirmDialogComponent>,
    private heroesService : HeroesService,
    private snackbar : MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Hero,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.heroesService.deleteHeroById(this.data.id)
      .subscribe({
        next : () => this.dialogRef.close(true),
        error: err => {
          this.showSnackBar(`Error deleting ${this.data.superhero}`)
        }
      })
  }

  private showSnackBar( message : string) : void {
    this.snackbar.open( message, 'OK', {
      duration : 1500
    })
  }

}
