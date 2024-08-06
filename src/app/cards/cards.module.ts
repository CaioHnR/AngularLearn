import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardComponent } from '../card/card.component';



@NgModule({
  declarations: [
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardRoxoComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardRoxoComponent,
    CardComponent
  ],
})
export class CardsModule { }
