import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  arr: any[] = [];

  ngOnInit(): void {
    fetch("https://fullstack-api.herokuapp.com/", {
      method: "GET",
      // mode:"no-cors"
    }).then(res => res.json()).then(json => {
      console.log(json)
      this.arr.push(...json)
    })
  }

}
