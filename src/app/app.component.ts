import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ux-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app';
}
