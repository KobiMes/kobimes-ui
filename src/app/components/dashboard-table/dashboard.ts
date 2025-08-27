import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Machine } from '../../models/machine';

@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-table.html',
  styleUrls: ['./dashboard-table.scss']
})
export class DashboardTable {
  @Input() machines: Machine[] = [];  // HomeComponent'tan gelecek veriyi alacak
}
