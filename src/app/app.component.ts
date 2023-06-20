import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  arr: any[] = [];

  ngOnInit(): void {
    fetch("https://mean-stack-backend-a61768c8f8c8.herokuapp.com/", {
      method: "GET",
      // mode:"no-cors"
    }).then(res => res.json()).then(json => {
      console.log(json)
      this.arr.push(...json)
    })
  }

}
