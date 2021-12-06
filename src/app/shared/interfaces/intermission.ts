import { User } from "./user";

export interface Intermission {

    id : number;
    staffingPartner: User,
    collaborator: User,
    lastMissionName: string,
    beginIntermission: Date,
    endingIntermission: Date,
    sendDateForm: Date
  }
  