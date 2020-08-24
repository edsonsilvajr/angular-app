import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  username = "";
  
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  checkUser(): boolean{
    if(this.username != ""){
      return true;
    }else return false;
  }

  onUserAdd(): void{
    this.username = "";
  }

  ngOnInit(): void {
  }

}
