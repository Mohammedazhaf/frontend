import { Employee } from "./Employee";
import { Demande } from "./Demande";
export interface Rapport {
    idRapport: number;
    date: Date;
    contenu: string;
    employee: Employee;
    demande: Demande;
    documentR: File;
  }
  