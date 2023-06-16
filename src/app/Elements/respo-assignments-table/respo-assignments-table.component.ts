import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-respo-assignments-table',
  templateUrl: './respo-assignments-table.component.html',
  styleUrls: ['./respo-assignments-table.component.css']
})
export class RespoAssignmentsTableComponent implements OnInit{
  assignments : any[] = []
  assignmentsAll : any[] = []
  employees: any[] = []
  demandes: any[] = []
  edit = false
  query = ""
  selectedEmployeeId = 0;
  selectedDemandeId = 0;
  assignmentData: any = {
    mission: '',
    delaiDate: '',
    idDemande: null,
    idEmployee: null
  };
  constructor(private route:ActivatedRoute,private httpClient : HttpClient){}
  ngOnInit(): void {
    this.httpClient.get<any[]>("http://localhost:8080/api/affectation/all").subscribe(
      result => {
        this.assignments = result
        this.assignmentsAll = result
        this.httpClient.get<any[]>("http://localhost:8080/api/demande/all").subscribe(
          result =>{
            this.demandes = result
            this.httpClient.get<any[]>("http://localhost:8080/respo/employee/all").subscribe(
              result =>{
                this.employees = result
              }
            )
          }
        )
      }
    )
  }
  filter(){
    if(this.query=="")
    this.assignments = this.assignmentsAll
    else
    this.assignments  = this.assignmentsAll.filter(obj => {
      const { idDemande, employee, demande } = obj;
      const employeeName = `${employee.personne.prenom} ${employee.personne.nom}`;
      return (
        idDemande.toString().includes(this.query) ||
        employeeName.toLowerCase().includes(this.query.toLowerCase()) ||
        demande.titre.toLowerCase().includes(this.query.toLowerCase())
      );
    });
  }
  submitAssignment() {
    this.assignmentData.idDemande = this.selectedDemandeId;
    this.assignmentData.idEmployee = this.selectedEmployeeId;

  this.httpClient.post('http://localhost:8080/api/affectation/add', this.assignmentData)
      .subscribe(response => {
        console.log('Assignment submitted successfully!', response);
        // Reset form or perform any other necessary actions
      }, error => {
        console.error('Error submitting assignment:', error);
        // Handle error scenario if needed
      });
  }
}
