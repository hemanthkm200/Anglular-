import { Component, OnInit } from '@angular/core';
import { backEndService } from '../back-end.service';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {

  constructor(private backendService: backEndService) { }

  ngOnInit(): void {
    this.onFetch();
  }
onSave(){
  console.log("Inside OnSave");
  this.backendService.saveData();
}
onFetch(){
  this.backendService.fetchData();
}

}
