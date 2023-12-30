import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './new/new.component';
@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, RouterOutlet,NewComponent],
  template: `
  <div>
    <textarea class="class1">Marvellous Infosystems</textarea>
    <br>
    <input type="text" placeholder="This is textfield">
  </div>
  <app-new></app-new>
`,
styles: [`
.class1 {
  color: blue;
}

`]
})
export class AppComponent {
  title = 'Asgn6';
}