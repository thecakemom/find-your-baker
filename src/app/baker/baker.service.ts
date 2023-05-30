import { EventEmitter, Injectable } from "@angular/core";
import { Profiles } from "../shared/profiles/profiles.model";

@Injectable({
  providedIn: "root"
})
export class BakerService {
  private myProfile: Profiles[] = [
    new Profiles(
    'A Test Name',
    'A Test Location',
    'A Test Website',
    'A Test Contact Information',
    'https://unsplash.com/photos/neu4T59mTcY'),
    new Profiles(
      'A Test Name',
      'A Test Location',
      'A Test Website',
      'A Test Contact Information',
      'https://unsplash.com/photos/neu4T59mTcY')
  ];
  bakerListChanged: any;
  bakerSelected: any;
  getProfiles() {
    return this.myProfile.slice();
  }
  saveProfiles(profile: Profiles) {
    this.myProfile.push(profile);
    this.profilesListChanged.emit(this.myProfile.slice());
  }
  removeProfiles(idx: number) {
    if (idx !== -1) {
      //should be !=== but had error of expression expected ?
      this.myProfile.splice(idx, 1)
      this.profilesListChanged.emit(this.myProfile.slice());
    }
  }
  profilesSelected = new EventEmitter<Profiles>();
  profilesListChanged = new EventEmitter<Profiles[]>();
}
