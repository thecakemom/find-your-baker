import { Component, OnInit } from '@angular/core';
import { Profiles } from 'src/app/shared/profiles/profiles.model';
import { BakerLibraryService } from '../baker-library.service';
import { BakerService } from 'src/app/baker/baker.service';

@Component({
  selector: 'app-baker-results',
  templateUrl: './baker-results.component.html',
  styleUrls: ['./baker-results.component.css']
})
export class BakerResultsComponent implements OnInit {
 allProfiles: Profiles[] = [];

  constructor(
    private bakerService: BakerService,
    private bakerLibraryService: BakerLibraryService
    ) {}

  ngOnInit(): void {
    this.allProfiles = this.bakerLibraryService.getProfile();
  }

  onSaveProfile(profile: Profiles) {
    return this.bakerService.saveProfiles(profile);
  }

}
