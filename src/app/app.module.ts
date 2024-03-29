import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { NotasComponent } from './views/notas/notas.component';
import { DisciplinasComponent } from './views/disciplinas/disciplinas.component';
import { LoginComponent } from './views/login/login.component';
import { TurmaComponent } from './views/turma/turma.component';
import { RedefinirSenhaComponent } from './views/redefinir-senha/redefinir-senha.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    NotasComponent,
    DisciplinasComponent,
    TurmaComponent,
    LoginComponent,
    RedefinirSenhaComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatMenuModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
