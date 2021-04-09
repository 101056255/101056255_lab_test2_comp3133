import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit, OnChanges {
  @Input() data: any;

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.data);
  }
}
