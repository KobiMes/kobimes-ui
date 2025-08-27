import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header-container">
<img src="images/izrplogoQ.ico" alt="Logo" class="header-logo">
      <span class="header-title">Kobi Mühendislik</span>
    </div>
  `,
  styleUrls: ['./header.scss']
})
export class Header {}
