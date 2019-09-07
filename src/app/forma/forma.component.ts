import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
 @Output() serverCreated  = new EventEmitter<{serverName:string,serverContent:string}>();
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName:HTMLInputElement) {
    console.log("u on add server",this.newServerName);
    
   this.serverCreated.emit({
     serverName:serverName.value,
     serverContent:this.newServerContent})
  }

}
