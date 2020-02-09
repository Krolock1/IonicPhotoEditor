import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Gig } from "../../model/gig";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "tf-gig",
  templateUrl: "./gig.component.html",
  styleUrls: ["./gig.component.scss"]
})
export class GigComponent {
  constructor(private popoverController: PopoverController) {}
  @Input() showDetails = false;
  @Input() gig: Gig;
  @Output() detailsOpened = new EventEmitter<number>();

  toggleDetails() {
    this.showDetails = !this.showDetails;
    if (this.showDetails) {
      this.detailsOpened.emit(this.gig.id);
    }
  }
}
