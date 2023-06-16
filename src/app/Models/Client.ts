import { Personne } from "./Personne";

export interface Client extends Personne {
  nomEntreprise: string;
}
