import { Coordinate } from "./coordinate";

export interface Location {
  address: string;
  destination?: string;
  coordinate?: Coordinate;
}
