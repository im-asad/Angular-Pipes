import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  array = ['Pakistan', 'India', 'USA'];

  public pushItem = (item) => {
    this.array.push(item);
  };
}
