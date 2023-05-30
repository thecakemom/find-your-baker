import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BakerService } from 'src/app/baker/baker.service';
import { Profiles } from './profiles.model';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
@Input () myProfile: Profiles;
@Output() profilesSelected = new EventEmitter<void>();

  constructor(private bakerService: BakerService) {}

  ngOnInit(): void {}

  onProfileSelected() {
    //Tell App Component that someone clicked on a profile!
    this.bakerService.bakerSelected.emit(this.myProfile);
  }

}
