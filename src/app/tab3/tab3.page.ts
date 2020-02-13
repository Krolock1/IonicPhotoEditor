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

  async ngOnInit(): Promise<void> {
    console.log("start on init");
    this.gigs = await this.gigService.loadGigs();
    console.log(`load ${this.gigs.length} gigs`);
  }

  onDetailsOpened(gigId: number) {
    console.log(`gig ${gigId} is open`);
    this.activeGigId = gigId;
  }
}
