import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formDetails={
    musicLanguage:'',
    musicCatogory:'',
    singer:'',
    musicType:''
  }
  Details(){
    console.log(this.formDetails)
    alert("Music Saved Successfully")
  }
}
