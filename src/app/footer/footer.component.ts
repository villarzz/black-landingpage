import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Componente de rodapé
 * Exibe informações de contato, links e redes sociais
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
