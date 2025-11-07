import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CryptoPrice } from '../models/crypto-price.interface';

/**
 * Componente de ticker de preços de criptomoedas
 * Simula preços em tempo real com atualização automática
 */
@Component({
  selector: 'app-crypto-ticker',
  templateUrl: './crypto-ticker.component.html',
  styleUrl: './crypto-ticker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoTickerComponent implements OnInit, OnDestroy {
  cryptoPrices: CryptoPrice[] = [
    { symbol: 'BTC', name: 'Bitcoin', price: 65432.50, change24h: 1234.50, changePercent: 1.92 },
    { symbol: 'ETH', name: 'Ethereum', price: 3245.80, change24h: -45.20, changePercent: -1.37 },
    { symbol: 'BNB', name: 'Binance Coin', price: 542.30, change24h: 12.40, changePercent: 2.34 },
    { symbol: 'ADA', name: 'Cardano', price: 0.65, change24h: 0.02, changePercent: 3.17 },
    { symbol: 'SOL', name: 'Solana', price: 145.75, change24h: -5.25, changePercent: -3.48 }
  ];

  private intervalId?: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Simula atualização de preços a cada 5 segundos
    this.intervalId = window.setInterval(() => {
      this.updatePrices();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updatePrices(): void {
    this.cryptoPrices = this.cryptoPrices.map(crypto => {
      const changePercent = (Math.random() - 0.5) * 2; // -1% to +1%
      const change24h = crypto.price * (changePercent / 100);
      return {
        ...crypto,
        change24h,
        changePercent
      };
    });
    this.cdr.markForCheck();
  }

  formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  formatChange(change: number): string {
    return Math.abs(change).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
}
