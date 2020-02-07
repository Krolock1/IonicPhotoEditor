import { Coordinate } from "./coordinate";

export interface Gig {
  start: Date;
  meeting?: Date;
  location: string;
  locator: string;
  coordinate?: Coordinate;
  comment?: string;
}
