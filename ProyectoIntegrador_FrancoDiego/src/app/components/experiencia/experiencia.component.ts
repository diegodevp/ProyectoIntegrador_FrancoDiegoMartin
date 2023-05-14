import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.querySelector('#' + fragment);
        if (element) { element.scrollIntoView(); }
      }
    });
  }
}
