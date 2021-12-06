import { User } from "./user";

export interface Question {
    id: number;
    question: string;
    mandatory: boolean;
    user: User;
  }
  