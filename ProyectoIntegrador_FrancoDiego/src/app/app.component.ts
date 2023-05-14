import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoIntegrador_FrancoDiego';
  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.querySelector('#' + fragment);
        if (element) { element.scrollIntoView(); }
      }
    });
  }
}
