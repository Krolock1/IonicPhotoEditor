import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { GigPopoverComponent } from "./gig-popover.component";

describe("GigPopoverComponent", () => {
  let component: GigPopoverComponent;
  let fixture: ComponentFixture<GigPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GigPopoverComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GigPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
