import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() title: string = '';
  @Input() bgColor: string = '';
  @Input() txtColor: string = '';
  @Input() category: string = '';
  @Input() platform: string = '';
  @Input() description: string = '';
}
