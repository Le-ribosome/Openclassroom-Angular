import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postDate : Date;
  @Input() postNote : number;

  constructor() { }

  ngOnInit() {

  }

  onVoteNo(){
    this.postNote--;
  }

  onVoteYes(){
    this.postNote++;
  }

}
