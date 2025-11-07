import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Componente de newsletter
 * Formulário de inscrição para captura de leads
 */
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent {
  email = '';

  onSubmit(): void {
    if (this.email && this.isValidEmail(this.email)) {
      alert(`Obrigado por se inscrever! Email: ${this.email}`);
      this.email = '';
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
