import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profiles } from 'src/app/shared/profiles/profiles.model';
import { BakerService } from '../baker.service';

@Component({
  selector: 'app-baker-list',
  templateUrl: './baker-list.component.html',
  styleUrls: ['./baker-list.component.css']
})
export class BakerListComponent implements OnInit {
  @Input() myProfile: Profiles;
  profile: Profiles[] = [];
  @Output() currentSelectedProfile = new EventEmitter<Profiles>();

  constructor(private bakerService: BakerService) {}

  ngOnInit(): void {
    this.profile = this.bakerService.getProfiles();
    this.bakerService.bakerListChanged.subscribe((profile: Profiles[]) => {
      this.profile = profile;
    });
  }

  onRemoveProfile(idx) {
    this.bakerService.removeProfiles(idx);
  }

}
