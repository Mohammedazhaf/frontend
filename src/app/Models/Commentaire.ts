import { Personne } from "./Personne";
import { Demande } from "./Demande";
export interface Commentaire {
    idCommentaire: number;
    etoile: number;
    texteC: string;
    personne: Personne;
    demande: Demande;
  }