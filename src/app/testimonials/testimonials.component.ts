import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Testimonial } from '../models/testimonial.interface';

/**
 * Componente de depoimentos
 * Exibe feedback de clientes satisfeitos
 */
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Maria Silva',
      role: 'CEO',
      company: 'Tech Innovations',
      content: 'A equipe da Crypto Currency Agency transformou minha carteira de investimentos. Profissionalismo e expertise incomparáveis!',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Investidor',
      company: 'Investimentos Plus',
      content: 'Excelente suporte e consultoria. Consegui diversificar meus investimentos em cripto com total segurança.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Empreendedora',
      company: 'Digital Ventures',
      content: 'Recomendo fortemente! A plataforma é intuitiva e o atendimento é excepcional. Meus lucros aumentaram significativamente.',
      rating: 5
    }
  ];

  getStarArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }
}
