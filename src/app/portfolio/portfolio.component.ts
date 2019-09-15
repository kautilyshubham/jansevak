import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  cover=false;
  coverImage;
  coverImg="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350";
  constructor() { }

  ngOnInit() {
  }

  openCover(){
    this.cover =true; 
  }
  closeCover(){
    this.cover=false;
  }
  saveCloseCover(){
    this.cover=false;
  }
}
