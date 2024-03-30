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
  providers: [TranslatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './font-styles.css', './tooltip.css', './media-queries.css']
})
export class AppComponent {
  title = 'portfolio';
  activo: string = 'home'; // 'home' es el valor predeterminado
  currentLanguage: string;
  private languageSubscription: Subscription; 

  constructor(private langService: LanguageService,
    private translatePipe: TranslatePipe){
    this.languageSubscription = this.langService.currentLanguage.subscribe(lang => {
      this.currentLanguage = lang;
    });
    // this.listenToChange();
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

  translateText(identifier: string) : string {
    return this.translatePipe.transform(identifier);
  }
  // listenToChange(){
  //   document.addEventListener('DOMContentLoaded', (event) => {
  //     const checkBox = document.getElementById('check');
  //     const menuContainer = document.querySelector('.card-nav-bottom-container');
  
  //     checkBox?.addEventListener('change', ()=> {
  //       if(checkBox.ariaChecked) {
  //         // Cuando el checkbox está marcado, muestra el menú
  //         menuContainer?.classList.add('is-visible');
  //       } else {
  //         // Cuando el checkbox no está marcado, oculta el menú
  //         menuContainer?.classList.remove('is-visible');
  //       }
  //     });
  //   });
  // }
}