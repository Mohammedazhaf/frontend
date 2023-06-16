import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { MakeRequestComponent } from './Pages/make-request/make-request.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { DemandeTrackingPageComponent } from './Pages/demande-tracking-page/demande-tracking-page.component';
import { MyRequestsPageComponent } from './Pages/my-requests-page/my-requests-page.component';
import { MyAccountComponent } from './Pages/my-account/my-account.component';
import { RespoRequestsPageComponent } from './Pages/respo-requests-page/respo-requests-page.component';
import { RespoViewRequestComponent } from './Pages/respo-view-request/respo-view-request.component';
import { RespoAssignmentsPageComponent } from './Pages/respo-assignments-page/respo-assignments-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'request-form', component: MakeRequestComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'my-requests/:id', component: DemandeTrackingPageComponent},
  {path: 'requests', component: RespoRequestsPageComponent},
  {path: 'my-account', component: MyAccountComponent},
  {path: 'my-requests', component: MyRequestsPageComponent},
  {path: 'requests/:id', component: RespoViewRequestComponent},
  {path: 'assignments', component: RespoAssignmentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
