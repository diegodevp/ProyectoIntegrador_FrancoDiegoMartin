import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.querySelector('#' + fragment);
        if (element) { element.scrollIntoView(); }
      }
    });
  }
}
