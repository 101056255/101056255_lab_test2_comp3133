import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit{
  array = [];

  constructor(private service: SpacexapiService, private router: Router) { }
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll(): any 
  {
    this.service.getAll().subscribe((res: any) => {
      console.log(res)
      this.array = res;
    })
  }

  showDetails(index: any)
  {
    console.log(index);
    this.router.navigate(['/details']);
  }
}
