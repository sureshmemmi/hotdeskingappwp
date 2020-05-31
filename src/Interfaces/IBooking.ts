import { ITeamMember } from "./ITeamMember";
import { IDesk } from "./IDesk";

export interface IBooking {
    id: number;
    teamMember: ITeamMember;
    weekCommencing: string;
    monday: IDesk;
    tuesday: IDesk;
    wednesday: IDesk;
    thursday: IDesk;
    friday: IDesk;
    saturday: IDesk;
    sunday: IDesk;
}