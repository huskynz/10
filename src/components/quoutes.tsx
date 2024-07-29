// src/components/QuotesCycler.ts
export default class QuotesCycler {
  private quotes: string[];
  private interval: number;
  private currentQuoteIndex: number;
  private container: HTMLElement;
  private intervalId: number | undefined;

  constructor(quotes: string[], interval: number, container: HTMLElement) {
    this.quotes = quotes;
    this.interval = interval;
    this.currentQuoteIndex = 0;
    this.container = container;

    this.startCycling();
  }

  private startCycling() {
    if (this.quotes.length === 0) return;

    this.updateQuote();
    this.intervalId = window.setInterval(() => {
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
      this.updateQuote();
    }, this.interval);
  }

  private updateQuote() {
    this.container.innerHTML = `<p class="text-lg italic text-gray-600">${this.quotes[this.currentQuoteIndex]}</p>`;
  }

  public stopCycling() {
    if (this.intervalId !== undefined) {
      window.clearInterval(this.intervalId);
    }
  }
}
