export class Profiles {
    public name: string;
    public location: string;
    public website: string;
    public contact: string;
    public imagePath: string;

    constructor(
      name: string,
      location: string,
      website: string,
      contact: string,
      imagePath: string) {
        this.name = name;
        this.location = location;
        this.website = website;
        this.contact = contact;
        this.imagePath = imagePath;
    }
}
