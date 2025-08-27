import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home'; // Eğer Home component'i varsa bunu ekleyin

export const routes: Routes = [
  // Eğer uygulamanızda routing yapısı kullanacaksanız buraya yolları ekleyebilirsiniz.
  { path: '', component: HomeComponent }
  // Diğer yollar...
];