import { Location } from "./Location";

export interface Gig {
  id: number;
  name: string;
  start: Date;
  meeting?: Date;
  location: Location;
  locator?: string;
  comment?: string;
}
