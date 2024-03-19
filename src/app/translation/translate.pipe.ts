import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language/language.service';
import { Subscription } from 'rxjs';
import { translations } from './translations';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private language: string;
  private languageSubscription: Subscription;

  transform(value: any, ...args: any[]): any {
    return translations[this.language][value] || value;
  }

  constructor(private languageService: LanguageService){
    this.languageSubscription = this.languageService.currentLanguage.subscribe(lang => {
      this.language = lang;
    });
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }
}
