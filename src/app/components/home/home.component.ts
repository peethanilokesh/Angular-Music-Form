import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  image:string="https://coloringhome.com/coloring/9ip/b77/9ipb77d5T.gif"

  ngOnInit(): void {
  }

}
