import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  jsonValue = {
    a: 'hello',
    b: 'world'
  }

  newDate = new Date();


  handleEvent(){
    console.log('button has been clicked', this.title)
  }
}
