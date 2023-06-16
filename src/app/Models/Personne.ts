import { Role } from "./Role";
export interface Personne {
    idPersonne: number;
    nom: string;
    prenom: string;
    numTel: string;
    email: string;
    motDePasse: string;
    role: Role;
  }
  