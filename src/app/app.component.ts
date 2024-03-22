import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from './translation/translate.pipe'
import { LanguageService } from './services/language/language.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslatePipe, CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './font-styles.css', './tooltip.css']
})
export class AppComponent {
  title = 'portfolio';
  activo: string = 'home'; // 'home' es el valor predeterminado
  currentLanguage: string;
  private languageSubscription: Subscription; 

  constructor(private langService: LanguageService){
    this.languageSubscription = this.langService.currentLanguage.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  setActivo(nombre: string): void {
    this.activo = nombre;
  }
  
  changeLanguage(){
    if(this.currentLanguage == 'ES'){
      this.langService.changeLanguage("EN");
      return;
    }
    this.langService.changeLanguage("ES");
  }
}