import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bpCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement){
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value
    })
  }

  onAddBlueprint(bpName: HTMLInputElement, bpContent: HTMLInputElement){
    this.bpCreated.emit({
      serverName: bpName.value,
      serverContent: bpContent.value
    })
  }

}
