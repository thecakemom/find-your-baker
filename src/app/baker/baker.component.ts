import { Component, OnInit } from '@angular/core';
import { Profiles } from '../shared/profiles/profiles.model';
import { BakerService } from './baker.service';

@Component({
  selector: 'app-baker',
  templateUrl: './baker.component.html',
  styleUrls: ['./baker.component.css']
})
export class BakerComponent implements OnInit {
  selectedProfile: Profiles;

  constructor(private bakerService: BakerService) { }

  ngOnInit(): void {
    this.bakerService.bakerSelected.subscribe((profile: Profiles) => {
      this.selectedProfile = profile;
    });
  }

  onProfileSelected(profile: Profiles): void {
    this.selectedProfile = profile;
  }
}
