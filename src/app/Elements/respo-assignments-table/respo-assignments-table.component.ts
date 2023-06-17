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
  employeesAll: any[] = []
  demandes: any[] = []
  edit = false
  selectedAssignment = 0
  query = ""
  deleted = false
  selectedEmployeeId = 0;
  selectedDemandeId = 0;    
  created= false
  failed = false
  assignmentData: any = {
    mission: '',
    delaiDate: '',
    idDemande: null,
    idEmployee: null,
  };
  failedEdit = false
  successEdit = false
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
                this.employeesAll = result
              }
            )
          }
        )
      }
    )
  }
  selectAssignment(id : number){
    this.edit=true
    this.selectedAssignment = id
    let selected = this.assignmentsAll.filter(item => item.idAffectation == id)
    console.log("assig all" + this.assignmentsAll)
    console.log("selected" + selected[0])
    this.selectedDemandeId = selected[0].demande.idDemande     
    this.assignmentData.mission = selected[0].mission
    this.assignmentData.delaiDate = selected[0].delaiDate   
    this.employeesChoose(true)
    this.selectEmployee(this.assignmentsAll.filter(item => item.idAffectation == id)[0].employee.idEmployee)
  }

  sortby(what : string){
    this.assignmentsAll=this.assignmentsAll.sort((a, b) => {
      const nameA = a.employee.personne.nom.toLowerCase();
      const nameB = b.employee.personne.nom.toLowerCase();
      if(what=="nom"){
            const nameA = a.employee.personne.nom.toLowerCase();
            const nameB = b.employee.personne.nom.toLowerCase();
      }
      if(what == "prenom"){
        const nameA = a.employee.personne.prenom.toLowerCase();
        const nameB = b.employee.personne.prenom.toLowerCase();
      }
      if(what == "mission"){
        const nameA = a.mission.toLowerCase();
        const nameB = b.mission.toLowerCase();
      }
      if(what == "demande"){
        const nameA = a.demande.titre.toLowerCase();
        const nameB = b.demande.titre.toLowerCase();
      }
      if(what == "date"){
        const nameA = a.delaiDate.toLowerCase();
        const nameB = b.delaiDate.toLowerCase();
      }
  
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });
  }
  saveEdit(){
    this.assignmentData.idDemande = this.selectedDemandeId;
    this.assignmentData.idEmployee = this.selectedEmployeeId;
    this.httpClient.put('http://localhost:8080/api/affectation/update/'+this.selectedAssignment, this.assignmentData)
      .subscribe(response => {
        console.log('Assignment submitted successfully!', response);
          this.edit = true
          this.successEdit = true
        // Reset form or perform any other necessary actions
      }, error => {
        console.error('Error submitting assignment:', error);
        this.edit = true
          this.failedEdit = true
        // Handle error scenario if needed
      });
  }
  selectEmployee(i : number ){
    this.selectedEmployeeId = i
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
  employeesChoose(edit : boolean){
    let dem = this.assignmentsAll.filter(item => item.demande.idDemande == this.selectedDemandeId)
    let ids = [0]
    dem.forEach(item => {
      if(!ids.includes(item.employee.idEmployee))
        ids.push(item.employee.idEmployee)
    })

    this.employeesAll.forEach(item => {
      if(!ids.includes(item.idEmployee))
        if(!this.employees.includes(item))
          this.employees.push(item)
    })

    if(edit==true)
    this.employees.push(this.employeesAll.filter(item => 
      item.employee.idEmployee == this.selectedEmployeeId))


    console.log("ids" + ids)
    console.log(this.employees)
  }
  deleteAssignment(id : number){
    this.httpClient.delete('http://localhost:8080/api/affectation/delete/'+id)
      .subscribe(response => {
        console.log('Assignment deleted successfully!', response);
          this.deleted = true
          this.ngOnInit()
        // Reset form or perform any other necessary actions
      }, error => {
        console.error('Error deleting assignment:', error);
          this.deleted = true
        // Handle error scenario if needed
      });
  }
  submitAssignment() {
    this.assignmentData.idDemande = this.selectedDemandeId;
    this.assignmentData.idEmployee = this.selectedEmployeeId;
    this.httpClient.post('http://localhost:8080/api/affectation/add', this.assignmentData)
      .subscribe(response => {
        console.log('Assignment submitted successfully!', response);
          this.created = true
        // Reset form or perform any other necessary actions
      }, error => {
        console.error('Error submitting assignment:', error);
          this.failed = true
        // Handle error scenario if needed
      });
  }
}
