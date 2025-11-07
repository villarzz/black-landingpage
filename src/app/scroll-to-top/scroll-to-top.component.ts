import { Component, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core';

/**
 * Componente de botão scroll-to-top
 * Aparece quando o usuário rola a página para baixo
 */
@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollToTopComponent {
  isVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const visible = window.pageYOffset > 300;
    if (visible !== this.isVisible) {
      this.isVisible = visible;
      this.cdr.markForCheck();
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
