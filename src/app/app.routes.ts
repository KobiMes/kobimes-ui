import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Configuring } from './pages/configuring/configuring';
import { Manufacturing } from './pages/manufacturing/manufacturing';
const routes: Routes = [
  { path: '', component: HomeComponent }, // anasayfa
    { path: 'configuring', component: Configuring },
  { path: 'manufacturing', component: Manufacturing },
  { path: '**', redirectTo: '' },      // yanlış url olursa home’a yönlendir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }