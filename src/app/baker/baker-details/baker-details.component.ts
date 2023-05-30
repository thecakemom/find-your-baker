import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Profiles } from 'src/app/shared/profiles/profiles.model';
import { BakerService } from '../baker.service';

@Component({
  selector: 'app-baker-details',
  templateUrl: './baker-details.component.html',
  styleUrls: ['./baker-details.component.css']
})
export class BakerDetailsComponent implements OnInit {
  myProfile: Profiles;
  //idx: number;

  constructor(
    //private bakerService: BakerService,
    //private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   // this.route.params.subscribe((params: Params) => {
      //this.idx = +params['id'];
      //this.myProfile = this.bakerService.getProfiles(this.idx);
    }
  }
