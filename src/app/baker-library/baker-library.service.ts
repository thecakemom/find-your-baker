import { EventEmitter, Injectable } from "@angular/core";
import { Profiles } from "../shared/profiles/profiles.model";

@Injectable({
  providedIn: "root"
})
export class BakerLibraryService {
  profileListChanged = new EventEmitter<Profiles[]>();

  private allProfiles: Profiles[] = [
    new Profiles(
      "Sandy Cheeks",
      "Bikini Bottom",
      "www.spongebob.com",
      "555-555-5555",
      "https://source.unsplash.com/50x50/?mystery,book"
    ),
    new Profiles(
      "The Cake Mom & Co",
      "Paducah, Kentucky",
      "https://www.thecakemom.com",
      "thecakemom@gmail.com",
      "https://thecakemom.com/order"
    ),
  ];
  getProfile() {
    return this.allProfiles.slice()
  }
}
