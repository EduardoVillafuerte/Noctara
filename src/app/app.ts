import { Component, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule, House, ShoppingCart, User, Search, Sparkles,
  Gem, Shirt, Crown, Star
} from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Noctara');
  readonly HomeIcon = House;
  readonly CartIcon = ShoppingCart;
  readonly UserIcon = User;
  readonly SearchIcon = Search;
  readonly SparklesIcon = Sparkles;
  readonly GemIcon = Gem;
  readonly ShirtIcon = Shirt;
  readonly CrownIcon = Crown;
  readonly StarIcon = Star;

  isDarkTheme = true;
  private isBrowser: boolean;

  categories = [
    { name: 'Nuevos', icon: this.SparklesIcon, description: 'Lo más reciente' },
    { name: 'Joyería', icon: this.GemIcon, description: 'Piezas únicas' },
    { name: 'Ropa', icon: this.ShirtIcon, description: 'Colección exclusiva' },
    { name: 'Premium', icon: this.CrownIcon, description: 'Lo mejor de lo mejor' },
    { name: 'Destacados', icon: this.StarIcon, description: 'Selección especial' }
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      const saved = localStorage.getItem('noctara-theme');
      if (saved === 'light') {
        this.isDarkTheme = false;
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isBrowser) {
      if (this.isDarkTheme) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('noctara-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('noctara-theme', 'light');
      }
    }
  }
}
