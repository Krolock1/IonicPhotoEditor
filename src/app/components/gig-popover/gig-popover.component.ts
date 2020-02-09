import { Component, Input, OnInit } from "@angular/core";
import { Gig } from "../../model/gig";

@Component({
  selector: "tf-gig-popover",
  templateUrl: "./gig-popover.component.html",
  styleUrls: ["./gig-popover.component.scss"]
})
export class GigPopoverComponent implements OnInit {
  constructor() {}
  @Input() gig: Gig;
  ngOnInit() {
    console.log(`gig popover starts with ${JSON.stringify(this.gig)}`);
  }
}
