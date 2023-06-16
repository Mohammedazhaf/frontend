export interface Demande {
  idDemande: number;
  responseResponsable: string;
  verSecretaire: boolean;
  date: string;
  titre: string;
  etat: string;
  service: string;
  budget: string;
  message: string;
  documentD: string | null;
  type: string;
  creationDate: string;
  idClient: string
  client : any
}
