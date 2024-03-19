import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from './translation/translate.pipe'
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  cambiarLenguage(){
    this.langService.changeLanguage("EN");
  }

  constructor(private langService: LanguageService){}
}