import { User } from "./user";

export interface Intermission {

    id : number;
    staffingPartner: User,
    collaborator: number,
    lastMissionName: string,
    beginIntermission: Date,
    endingIntermission: Date,
    sendDateForm: Date,
    responseSend: boolean
  }
  