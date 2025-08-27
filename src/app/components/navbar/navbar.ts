import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="navbar-container" [class.closed]="!isOpen">
      <div class="navbar-header" (click)="toggleNavbar()">
        <div class="navbar-logo-title">
          <img src="images/izrplogoQ.ico" alt="Logo" class="header-logo">
          <span class="title-text" *ngIf="isOpen">İZRPMesify</span>
        </div>
        <span class="toggle-arrow">{{ isOpen ? '◀' : '▶' }}</span>
      </div>

      <ul class="navbar-menu">
        <li>
          <a routerLink="/configuring" class="navbar-link">
            <img src="images/manufacturing.jpeg" alt="Configuring" class="menu-icon">
            <span *ngIf="isOpen">Configuring</span>
          </a>
        </li>
        <li>
          <a routerLink="/manufacturing" class="navbar-link">
            <img src="images/settings.png" alt="Settings" class="menu-icon">
            <span *ngIf="isOpen">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  isOpen = true;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
