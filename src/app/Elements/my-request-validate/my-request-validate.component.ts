import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande } from 'src/app/Models/Demande';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-my-request-validate',
  templateUrl: './my-request-validate.component.html',
  styleUrls: ['./my-request-validate.component.css'],
})
export class MyRequestValidateComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // hada howa l id dyal demande khass tste3mlo f get
  @Input() demande = '';
  request: Demande[] = [];

  // hnaya ghadi ndir wa7d demande par exemple
  Titre = 'Remake my website and change my hosting provider';
  Etat = 'In progress';
  Deadline = 'July 15, 2023';
  Service = 'Coding and Web Developement';
  Description = `We are seeking a competent and reliable web agency to undertake a crucial project for our organization. Our current website requires a complete overhaul and we are also looking to migrate to a new hosting provider. We understand the importance of a user-friendly and visually appealing website in today's digital landscape, and we aim to enhance our online presence and user experience significantly.<br/><br/>
  The primary objectives of this project are as follows:<br/><br/>
  1. Website Remake:<br/>
  - Redesign our existing website to achieve a modern, professional, and visually captivating look.<br/>
  - Implement a responsive design to ensure seamless accessibility across various devices and screen sizes.<br/>
  - Enhance the overall user experience by optimizing navigation, improving page load times, and simplifying content discovery.<br/>
  - Incorporate engaging visual elements, interactive features, and intuitive user interfaces to capture and retain visitor attention.<br/><br/>
  2. Content Restructuring and Optimization:<br/>
  - Analyze and restructure our website content to ensure it is concise, compelling, and well-organized.<br/>
  - Optimize the website's SEO elements, including meta tags, headings, and keywords, to improve search engine visibility and organic traffic.<br/>
  - Integrate an easy-to-use content management system (CMS) that allows us to update and manage website content effortlessly.<br/><br/>
  3. Migration to New Hosting Provider:<br/>
  - Facilitate the migration of our website to a new hosting provider with a robust infrastructure, ensuring improved reliability, security, and performance.<br/>
  - Assist with the seamless transfer of all website files, databases, and configurations to the new hosting environment.<br/>
  - Conduct thorough testing and quality assurance checks to ensure the website functions properly post-migration.<br/>
  - Provide comprehensive documentation and training to our team to manage the new hosting environment effectively.<br/><br/>
  4. Ongoing Support and Maintenance:<br/>
  - Offer post-launch technical support and maintenance services to address any issues or bugs that may arise.<br/>
  - Provide regular backups and implement security measures to safeguard our website against potential threats.<br/>
  - Collaborate on future enhancements and updates to continuously improve our website's performance and functionality.<br/><br/>
  We are looking for a web agency with a strong track record in website development and migration projects. The selected agency should demonstrate exceptional expertise in design, coding, hosting migration, and effective project management. Please submit your proposal, including relevant portfolio examples, estimated timelines, and a breakdown of costs. We eagerly anticipate partnering with a skilled agency that can fulfill our vision and deliver a top-tier website that aligns with our brand identity and business goals.`;
  Fichier = '';
  // end

  token: any;
  showFullDescription = false;
  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      this.token = jwt_decode(this.token);
      this.token = JSON.parse(JSON.stringify(this.token));
    }
    this.demande = this.route.snapshot.paramMap.get('id') ?? '';

    this.httpClient
      .get<Demande>('http://www.mohammedazhaf.me:8080/api/demande/getById/' + this.demande)
      .subscribe(
        (result) => {
          if (result) {
            console.log(
              result.client.idClient + '  ==  ' + this.token.idPersonne
            );
            if (result.client.idClient == this.token.idPersonne)
              this.request[0] = result;
            else this.router.navigate(['my-requests']);
          }
        },
        (error) => {
          this.router.navigate(['my-requests']);
        }
      );
  }
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

  updateRequest() {
    const id = this.demande;
    console.log(id);
  
    const updatedRequest = {
      date: this.request[0].date,
      titre: this.request[0].titre,
      etat: this.request[0].etat,
      service: this.request[0].service,
      budget: this.request[0].budget,
      message: this.request[0].message,
      type: this.request[0].type,
    };
    console.log(updatedRequest);
    const formData = new FormData();
    formData.append('demande', JSON.stringify(updatedRequest));
  
    const headers = new HttpHeaders();
  
    this.httpClient
      .put(`http://www.mohammedazhaf.me:8080/api/demande/update/${id}`, formData)
      .subscribe(
        () => {
          console.log('Demande updated successfully');
        },
        (error) => {
          console.error('Error updating demande:', error);
        }
      );
      this.router.navigate(['requests-review']);

  }
  
   
}
