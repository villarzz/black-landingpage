import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CryptoCardService } from '../services/crypto-card.service';
import { CardData } from '../models/card.interface';

/**
 * Componente de seção de serviços
 * Exibe lista de cards com informações sobre diferentes criptomoedas
 */
@Component({
  selector: 'app-nossos-servicos',
  templateUrl: './nossos-servicos.component.html',
  styleUrl: './nossos-servicos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NossosServicosComponent implements OnInit {
  cards: CardData[] = [];

  constructor(private cryptoCardService: CryptoCardService) {}

  ngOnInit(): void {
    this.cryptoCardService.getCards().subscribe(cards => {
      this.cards = cards;
    });
  }
}
