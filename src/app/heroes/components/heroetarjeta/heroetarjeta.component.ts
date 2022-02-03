import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
  }
`
]
})
export class HeroetarjetaComponent {

  @Input() heroe!: Heroe;

}
