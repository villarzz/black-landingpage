import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title!:string;
  @Input() bgColor!:string;
  @Input() txtColor!:string;
  @Input() category!:string;
  @Input() platform!:string;
  @Input() description!:string;
}
