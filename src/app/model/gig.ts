import { Location } from "./Location";

export interface Gig {
  _id: string;
  name: string;
  start: Date;
  meeting?: Date;
  location: Location;
  locator?: string;
  comment?: string;
}
