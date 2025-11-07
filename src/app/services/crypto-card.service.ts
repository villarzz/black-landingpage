import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardData } from '../models/card.interface';

/**
 * Serviço para gerenciar dados de cards de criptomoedas
 * Centraliza os dados e facilita manutenção e possível integração com API
 */
@Injectable({
  providedIn: 'root'
})
export class CryptoCardService {

  /**
   * Retorna lista de cards de criptomoedas como Observable
   * Preparado para futura integração com API REST
   * @returns Observable de array de dados de cards
   */
  getCards(): Observable<CardData[]> {
    const cards: CardData[] = [
      {
        bgColor: 'black',
        txtColor: '#888',
        category: 'CRYPTO',
        platform: 'Dashboard',
        title: 'Bitcoin',
        description: 'Bitcoin: pioneiro das criptomoedas, revolucionando finanças e tecnologia.'
      },
      {
        bgColor: '#0d6efd',
        txtColor: 'white',
        category: 'CRYPTO',
        platform: 'Mobile App',
        title: 'Ethereum',
        description: 'O Ethereum: plataforma blockchain e criptomoeda Ether (ETH).'
      },
      {
        bgColor: 'black',
        txtColor: '#888',
        category: 'CRYPTO',
        platform: 'Dashboard',
        title: 'Altcoin',
        description: 'Altcoins são criptomoedas alternativas ao Bitcoin, como Ethereum, Litecoin e Ripple.'
      }
    ];
    
    return of(cards);
  }
}
