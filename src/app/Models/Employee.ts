import { Personne } from "./Personne";

export interface Employee extends Personne {
  cin: string;
}
