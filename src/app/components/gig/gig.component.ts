import { Component, Input, OnInit } from "@angular/core";
import { Gig } from "../../model/gig";
import { PopoverController } from "@ionic/angular";
import { GigPopoverComponent } from "../gig-popover/gig-popover.component";

@Component({
  selector: "tf-gig",
  templateUrl: "./gig.component.html",
  styleUrls: ["./gig.component.scss"]
})
export class GigComponent {
  constructor(private popoverController: PopoverController) {}

  @Input() gig: Gig;

  async openGigPopover(ev: any) {
    console.log("popover starts");
    const popover = await this.popoverController.create({
      component: GigPopoverComponent,
      componentProps: { gig: this.gig },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
