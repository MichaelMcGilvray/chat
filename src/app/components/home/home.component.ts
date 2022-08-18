import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  data: any;
  formattedData: any;

  constructor() { }

  ngOnInit(): void {
    this.data = 0;

    // I don't need this
    this.formattedData = "Soon to be formatted";
  }

  public updateData() {
    this.data += 1;
  }

}
