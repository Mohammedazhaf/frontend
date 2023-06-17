import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Elements/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './Elements/hero-section/hero-section.component';
import { ServicesSectionComponent } from './Elements/services-section/services-section.component';
import { TestimonialsComponent } from './Elements/testimonials/testimonials.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { WorkSliderComponent } from './Elements/work-slider/work-slider.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamComponent } from './Elements/team/team.component';
import { FooterComponent } from './Elements/footer/footer.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { LoginFormComponent } from './Elements/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { MakeRequestComponent } from './Pages/make-request/make-request.component';
import { RequestFormComponent } from './Elements/request-form/request-form.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SideBarComponent } from './Elements/side-bar/side-bar.component';
import { DashboardProjectsComponent } from './Elements/dashboard-projects/dashboard-projects.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DashboardUpdatesComponent } from './Elements/dashboard-updates/dashboard-updates/dashboard-updates.component';
import { DemandeTrackingComponent } from './Elements/demande-tracking/demande-tracking.component';
import { DemandeTrackingPageComponent } from './Pages/demande-tracking-page/demande-tracking-page.component';
import { MyRequestUpdatesComponent } from './Elements/my-request-updates/my-request-updates.component';
import { MyRequestUpdateComponent } from './Elements/my-request-update/my-request-update.component';
import { MyRequestsComponent } from './Elements/my-requests/my-requests.component';
import { MyRequestsPageComponent } from './Pages/my-requests-page/my-requests-page.component';
import { MyAccountComponent } from './Pages/my-account/my-account.component';
import { NewRequestComponent } from './Pages/new-request/new-request.component';
import { RespoRequestsPageComponent } from './Pages/respo-requests-page/respo-requests-page.component';
import { MyAccountFormComponent } from './Elements/my-account-form/my-account-form.component';
import { RespoRequestsComponent } from './Elements/respo-requests/respo-requests.component';
import { RespoDemandeTrackComponent } from './Elements/respo-demande-track/respo-demande-track.component';
import { RespoViewRequestComponent } from './Pages/respo-view-request/respo-view-request.component';
import { RequestAssignmentsComponent } from './Elements/request-assignments/request-assignments.component';
import { RespoAssignmentsPageComponent } from './Pages/respo-assignments-page/respo-assignments-page.component';
import { RespoAssignmentsTableComponent } from './Elements/respo-assignments-table/respo-assignments-table.component'; // Import HttpClientModule
import { MyRequestValidatePageComponent } from './Pages/my-request-validate-page/my-request-validate-page.component';
import { AddRequestPageComponent } from './Pages/add-request-page/add-request-page.component';
import { MyAssigmentsPageComponent } from './Pages/my-assigments-page/my-assigments-page.component';
import { EmplyeeListPageComponent } from './Pages/emplyee-list-page/emplyee-list-page.component';
import { MyRequestValidateComponent } from './Elements/my-request-validate/my-request-validate.component';
import { MyAssigmentsComponent } from './Elements/my-assigments/my-assigments.component';
import { RequestsComponent } from './Elements/requests/requests.component';
import { EmplyeeListComponent } from './Elements/emplyee-list/emplyee-list.component';
import { AddRequestFormComponent } from './Elements/add-request-form/add-request-form.component';
import { AddEmployeeComponent } from './Elements/add-employee/add-employee.component';
import { AddEmployeePageComponent } from './Pages/add-employee-page/add-employee-page.component';
import { ViewAssignmentPageComponent } from './Pages/view-assignment-page/view-assignment-page.component';
import { ViewAssignmentComponentComponent } from './Elements/view-assignment-component/view-assignment-component.component';
import { AddRapportComponent } from './Elements/add-rapport/add-rapport.component';
import { AddRapportPageComponent } from './Pages/add-rapport-page/add-rapport-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroSectionComponent,
    ServicesSectionComponent,
    TestimonialsComponent,
    HomePageComponent,
    WorkSliderComponent,
    TeamComponent,
    FooterComponent,
    LoginPageComponent,
    LoginFormComponent,
    MakeRequestComponent,
    RequestFormComponent,
    DashboardComponent,
    SideBarComponent,
    DashboardProjectsComponent,
    DashboardUpdatesComponent,
    DemandeTrackingComponent,
    DemandeTrackingPageComponent,
    MyRequestUpdatesComponent,
    MyRequestUpdateComponent,
    MyRequestsComponent,
    MyRequestsPageComponent,
    MyAccountComponent,
    NewRequestComponent,
    RespoRequestsPageComponent,
    MyAccountFormComponent,
    RespoRequestsComponent,
    RespoDemandeTrackComponent,
    RespoViewRequestComponent,
    RequestAssignmentsComponent,
    RespoAssignmentsPageComponent,
    RespoAssignmentsTableComponent,
    MyRequestValidatePageComponent,
    AddRequestPageComponent,
    MyAssigmentsPageComponent,
    EmplyeeListPageComponent,
    MyRequestValidateComponent,
    MyAssigmentsComponent,
    RequestsComponent,
    EmplyeeListComponent,
    AddRequestFormComponent,
    AddEmployeeComponent,
    AddEmployeePageComponent,
    ViewAssignmentPageComponent,
    ViewAssignmentComponentComponent,
    AddRapportComponent,
    AddRapportPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
