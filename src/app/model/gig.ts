import { Coordinate } from "./coordinate";

export interface Gig {
  id: number;
  start: Date;
  meeting?: Date;
  location: string;
  locator: string;
  coordinate?: Coordinate;
  comment?: string;
}
