import { Intermission } from "./intermission";
import { Question } from "./question";

export interface Response {
    id: number;
    response: string;
    responseDateForm: Date;
    intermission: Intermission;
    question: Question;
  }
  