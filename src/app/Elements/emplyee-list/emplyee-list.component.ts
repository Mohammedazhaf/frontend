import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emplyee-list',
  templateUrl: './emplyee-list.component.html',
  styleUrls: ['./emplyee-list.component.css'],
})
export class EmplyeeListComponent implements OnInit {
  Objet: any = {};
  tab: [] = [];
  query = ""
  searchResults: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEmployees();
  }

  // show All Employees
  getEmployees() {
    this.http.get<any>('http://www.mohammedazhaf.me:8080/respo/employee/all').subscribe(
      (response) => {
        this.Objet = response;
        console.log(this.Objet);
      },
      (error) => {
        console.error('Error fetching employees', error);
      }
    );
  }

  // delete an employee
  deleteEmployee(employeeId: number) {
    this.http
      .delete(`http://www.mohammedazhaf.me:8080/respo/employee/delete/${employeeId}`)
      .subscribe(
        (response) => {
          console.log('Employee deleted successfully');
          alert('deleted with succees');
          this.ngOnInit()
        },
        (error) => {
          console.error('Error deleting employee', error);
        }
      );
  }
  // edit employee information 
  editEmployee(employee: Object) {}

  // serch for employees
  searchEmployees(nom: string) {
   
    this.http.get<any>(`http://www.mohammedazhaf.me:8080/respo/employee/search/${nom}`).subscribe(
      (response) => {
        this.searchResults = response;
        console.log('Search results:', this.searchResults);
      },
      (error) => {
        console.error('Error searching for employees', error);
      }
    );
  }
  
  
}
