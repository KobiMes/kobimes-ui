import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';  // ✅ RouterOutlet import

import { HomeComponent } from './pages/home/home';
import { Header } from './components/header/header';
import { Manufacturing } from './pages/manufacturing/manufacturing';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.html',
})
export class AppComponent { }
