import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../app.component.css', '../../font-styles.css','../../media-queries.css']
})
export class CardComponent {
  @Input() role : string;
  @Input() title : string;
  @Input() dateStart : string;
  @Input() dateEnd : string;
  @Input() description : string;
  @Input() skills : string[];
  @Input() imgRoute : string;
  @Input() redirectTo : string;
}
