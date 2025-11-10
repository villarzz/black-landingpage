import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * Componente reutilizável de card para exibir informações sobre criptomoedas
 * Utiliza OnPush change detection para melhor performance
 * 
 * @example
 * ```html
 * <app-card
 *   [bgColor]="'#0d6efd'"
 *   [txtColor]="'white'"
 *   [category]="'CRYPTO'"
 *   [platform]="'Mobile App'"
 *   [title]="'Bitcoin'"
 *   [description]="'Bitcoin: pioneiro das criptomoedas'">
 * </app-card>
 * ```
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  /** Título do card */
  @Input() title: string = '';
  
  /** Cor de fundo do card (ex: 'black', '#0d6efd') */
  @Input() bgColor: string = '';
  
  /** Cor do texto do card (ex: 'white', '#888') */
  @Input() txtColor: string = '';
  
  /** Categoria do serviço (ex: 'CRYPTO') */
  @Input() category: string = '';
  
  /** Plataforma do serviço (ex: 'Dashboard', 'Mobile App') */
  @Input() platform: string = '';
  
  /** Descrição detalhada do serviço */
  @Input() description: string = '';
}
