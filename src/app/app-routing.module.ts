import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosListagemComponent } from './pages/contatos-listagem/contatos-listagem.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact-list',
    pathMatch: 'full'
  },
  {path: 'contact-list', component: ContatosListagemComponent},
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
