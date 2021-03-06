import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab3Page } from "./tab3.page";
import { GigComponent } from "../components/gig/gig.component";
import { GigListComponent } from "../components/gig-list/gig-list.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: Tab3Page }])
  ],
  declarations: [Tab3Page, GigComponent, GigListComponent],
  entryComponents: []
})
export class Tab3PageModule {}
