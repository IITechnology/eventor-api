import { Roster } from "./entities/roster.entity";
import { ROSTER_RESPOSITORY } from "../core/constants";

export const RosterProviders = [
  {
    provide: ROSTER_RESPOSITORY,
    useValue: Roster,
  },
];
