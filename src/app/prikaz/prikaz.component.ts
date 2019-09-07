import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prikaz',
  templateUrl: './prikaz.component.html',
  styleUrls: ['./prikaz.component.css']
})
export class PrikazComponent implements OnInit {
@Input('srvElement') element:{type:string,name:string,content:string}
  constructor() { }

  ngOnInit() {
  }

}
