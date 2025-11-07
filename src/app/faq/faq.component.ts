import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FaqItem } from '../models/faq.interface';

/**
 * Componente de FAQ
 * Perguntas frequentes com funcionalidade de acordeão
 */
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'O que é criptomoeda?',
      answer: 'Criptomoeda é uma moeda digital ou virtual que usa criptografia para segurança. Diferente das moedas tradicionais, as criptomoedas são descentralizadas e operam em tecnologia blockchain.',
      isOpen: false
    },
    {
      question: 'Como posso começar a investir em criptomoedas?',
      answer: 'Para começar, você precisa criar uma conta em nossa plataforma, verificar sua identidade, depositar fundos e escolher as criptomoedas que deseja comprar. Nossa equipe oferece suporte completo durante todo o processo.',
      isOpen: false
    },
    {
      question: 'Quais criptomoedas vocês suportam?',
      answer: 'Oferecemos suporte para as principais criptomoedas do mercado, incluindo Bitcoin (BTC), Ethereum (ETH), e uma variedade de altcoins populares. Nossa carteira está sempre expandindo para incluir novos ativos promissores.',
      isOpen: false
    },
    {
      question: 'Meus investimentos estão seguros?',
      answer: 'Sim! Utilizamos as mais avançadas medidas de segurança, incluindo armazenamento em cold wallets, autenticação de dois fatores (2FA) e criptografia de ponta a ponta para proteger seus ativos.',
      isOpen: false
    },
    {
      question: 'Qual é a taxa de serviço?',
      answer: 'Nossas taxas são transparentes e competitivas. As taxas de transação variam de acordo com o volume e tipo de operação. Entre em contato para conhecer nossos planos personalizados.',
      isOpen: false
    },
    {
      question: 'Vocês oferecem consultoria personalizada?',
      answer: 'Sim! Oferecemos consultoria personalizada para investidores que desejam otimizar suas estratégias de investimento em criptomoedas. Agende uma consulta com nossos especialistas.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
