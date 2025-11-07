import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Componente de título principal (hero section)
 * Exibe a mensagem principal da landing page e o CTA
 */
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {

}
