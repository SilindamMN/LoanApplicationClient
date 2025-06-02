import { Routes } from '@angular/router';
import { BankerListComponent } from './pages/banker-list/banker-list.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { LoanApplicationListComponent } from './pages/loan-application-list/loan-application-list.component';
import { LoginComponent } from './pages/login/login.component';
import { NewLoanFormComponent } from './pages/new-loan-form/new-loan-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'banker-list', component: BankerListComponent },
    { path: 'customer-list', component: CustomerListComponent },
    { path: 'loan-application-list', component: LoanApplicationListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'new-loan-form', component: NewLoanFormComponent },
    { path: '**', redirectTo: 'login' } // wildcard for unknown paths
];



