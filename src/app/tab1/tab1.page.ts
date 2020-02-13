import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(private platform: Platform) {}

  openNavigationApp() {
    const latitute = "50.7067099N";
    const longitude = "7.4678808E";
    const destination = latitute + "," + longitude;
    if (this.platform.is("ios")) {
      window.open("maps://?q=" + destination, "_system");
    } else {
      const label = encodeURI("My Label");
      window.open(`geo:0,0?q=${destination}(${label})`, "_system");
    }
  }
}
