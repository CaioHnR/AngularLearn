import { Component } from '@angular/core';
import { setTimeout } from 'timers/promises';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  tipo = 'Teste';
  preco = 100;

  getFullprice() {
    

    return 'R$' + this.preco + ',00/Mês';
  }
}
