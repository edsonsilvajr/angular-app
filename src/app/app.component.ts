import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerCreated(event: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: "server",
      name: event.serverName,
      content: event.serverContent
    })
  }

  onBpCreated(event: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type:"blueprint",
      name: event.serverName,
      content: event.serverContent
    })
  }
}
