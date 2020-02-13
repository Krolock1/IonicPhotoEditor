import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Gig } from "../../model/gig";
import { Platform, PopoverController } from "@ionic/angular";

@Component({
  selector: "tf-gig",
  templateUrl: "./gig.component.html",
  styleUrls: ["./gig.component.scss"]
})
export class GigComponent {
  constructor(
    private popoverController: PopoverController,
    private platform: Platform
  ) {}
  @Input() showDetails = false;
  @Input() gig: Gig;
  @Output() detailsOpened = new EventEmitter<string>();
  @Output() deleteGig = new EventEmitter<string>();

  toggleDetails() {
    this.showDetails = !this.showDetails;
    if (this.showDetails) {
      this.detailsOpened.emit(this.gig._id);
    }
  }

  openNavigationApp() {
    const destination = this.gig.location.destination
      ? this.gig.location.destination
      : this.gig.location.coordinate
      ? `${this.gig.location.coordinate.latitude},${this.gig.location.coordinate.longitude}`
      : this.gig.location.address;
    if (!this.platform.is("hybrid")) {
      window.open(
        "https://www.google.com/maps/place/" + destination.replace(/ /g, "+"),
        "_system"
      );
    } else if (this.platform.is("ios")) {
      window.open("maps://?q=" + destination, "_system");
    } else {
      const label = encodeURI(this.gig.location.address);
      window.open(`geo:0,0?q=${destination}(${label})`, "_system");
    }
  }

  delete() {
    console.log("start to delete gig " + this.gig._id);
    this.deleteGig.emit(this.gig._id);
  }
}
