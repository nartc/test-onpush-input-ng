import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <hello [name]="title">
      <hello-child></hello-child>
    </hello>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'test-onpush-input';
}
