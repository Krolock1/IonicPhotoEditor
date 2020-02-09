import { Component, OnInit } from "@angular/core";
import { GigService } from "../services/gig.service";
import { Gig } from "../model/gig";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page implements OnInit {
  constructor(private gigService: GigService) {}
  private gigs: Gig[];
  private activeGigId: number;

  ngOnInit(): void {
    this.gigs = this.gigService.loadGigs();
  }

  onDetailsOpened(gigId: number) {
    console.log(`gig ${gigId} is open`);
    this.activeGigId = gigId;
  }
}
