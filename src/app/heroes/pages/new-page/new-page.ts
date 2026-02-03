import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  standalone : false,
  templateUrl: './new-page.html',
  styles: ``
})
export class NewPageComponent {

  public heroForm = new FormGroup({
    id : new FormControl(''),
    superhero : new FormControl(''),
    publisher : new FormControl(''),
    alter_ego : new FormControl(''),
    first_appearance : new FormControl(''),
    characters : new FormControl(''),
    alt_img : new FormControl('')
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Cómics'},
    { id: 'Marvel Comics', desc: 'Marvel - Cómics'}
  ];

  onSubmit() : void {
    console.log({
      formValid : this.heroForm.valid,
      value : this.heroForm.value
    });
  }
}
