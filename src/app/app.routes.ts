import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

const routes: Routes = [
  { path: '', component: HomeComponent }, // anasayfa
  { path: '**', redirectTo: '' }          // yanlış url olursa home’a yönlendir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }