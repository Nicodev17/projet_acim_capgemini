import { Authorities } from "./authorities";

export interface User {

  id : number;  
  firstname : string;
  lastname : string;
  email : string;
  password : string;
  job : string;
  authorities : Authorities;
}
