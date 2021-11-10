import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel-blog';
  fruit: string="";

  listOfFruits: string[]= ["Banana","Apple","Grapes"];

  allFruits(){
    console.info("Old : "+this.listOfFruits)
    this.listOfFruits.push(this.fruit);
    console.info("new : "+this.listOfFruits)

  }
}
