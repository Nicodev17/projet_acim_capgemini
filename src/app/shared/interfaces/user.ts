export interface User {

  id : number;
  lastname : string;
  firstname : string;
  right : boolean ; //référence la table Authorities dans la bdd
  email : string;
  password : string;
  job : string;
  formstate : string;
}
