import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MachineStatus } from '../../components/machine-status/machine-status';
import { Summary } from '../../components/summary/summary';
import { Machine } from '../../models/machine';
import { Header } from '../../components/header/header';
import { Navbar } from '../../components/navbar/navbar';
import { DashboardTable } from '../../components/dashboard-table/dashboard';
import { BigPanelCharts } from '../../components/biganel/biganel';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MachineStatus, Summary, Navbar, Header,DashboardTable,BigPanelCharts],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  selectedLine = 'line1';

  machines: Machine[] = [
    { id: 1, code: 'M/C 01', status: 'running', product: 'Widget A', line: 'line1',shift: 'Gündüz'  },
    { id: 2, code: 'M/C 02', status: 'off', product: 'Widget B', line: 'line1',shift: 'Gündüz'  },
    { id: 3, code: 'M/C 03', status: 'running', product: 'Widget C', line: 'line2',shift: 'Gündüz'  },
    { id: 4, code: 'M/C 04', status: 'running', product: 'Widget D', line: 'line2',shift: 'Gündüz'  },
    { id: 5, code: 'M/C 05', status: 'off', product: 'Widget E', line: 'line3' ,shift: 'Gündüz' },
    { id: 6, code: 'M/C 06', status: 'running', product: 'Widget F', line: 'line3',shift: 'Gündüz'  },
        { id: 1, code: 'M/C 01', status: 'running', product: 'Widget A', line: 'line1',shift: 'Gündüz'  },
    { id: 2, code: 'M/C 02', status: 'off', product: 'Widget B', line: 'line1',shift: 'Gündüz'  },
    { id: 3, code: 'M/C 03', status: 'running', product: 'Widget C', line: 'line2',shift: 'Gündüz'  },
    { id: 4, code: 'M/C 04', status: 'running', product: 'Widget D', line: 'line2',shift: 'Gündüz'  },
    { id: 5, code: 'M/C 05', status: 'off', product: 'Widget E', line: 'line3',shift: 'Gündüz'  },
        { id: 1, code: 'M/C 01', status: 'running', product: 'Widget A', line: 'line1',shift: 'Gündüz'  },
    { id: 2, code: 'M/C 02', status: 'off', product: 'Widget B', line: 'line1',shift: 'Gündüz'  },
    { id: 3, code: 'M/C 03', status: 'running', product: 'Widget C', line: 'line2',shift: 'Gündüz'  },
    { id: 4, code: 'M/C 04', status: 'running', product: 'Widget D', line: 'line2',shift: 'Gündüz'  },
    { id: 5, code: 'M/C 05', status: 'off', product: 'Widget E', line: 'line3',shift: 'Gündüz'  },
        { id: 1, code: 'M/C 01', status: 'running', product: 'Widget A', line: 'line1',shift: 'Gündüz'  },
    { id: 2, code: 'M/C 02', status: 'off', product: 'Widget B', line: 'line1',shift: 'Gündüz'  },
    { id: 3, code: 'M/C 03', status: 'running', product: 'Widget C', line: 'line2',shift: 'Gündüz'  },
    { id: 4, code: 'M/C 04', status: 'running', product: 'Widget D', line: 'line2',shift: 'Gündüz'  },
    { id: 5, code: 'M/C 05', status: 'off', product: 'Widget E', line: 'line3',shift: 'Gündüz'  },
    { id: 6, code: 'M/C 06', status: 'running', product: 'Widget F', line: 'line3',shift: 'Gündüz'  },
        { id: 1, code: 'M/C 01', status: 'running', product: 'Widget A', line: 'line1',shift: 'Gündüz'  },
    { id: 2, code: 'M/C 02', status: 'off', product: 'Widget B', line: 'line1',shift: 'Gündüz'  },
    { id: 3, code: 'M/C 03', status: 'running', product: 'Widget C', line: 'line2',shift: 'Gündüz'  },
    { id: 4, code: 'M/C 04', status: 'running', product: 'Widget D', line: 'line2',shift: 'Gündüz'  },
    { id: 5, code: 'M/C 05', status: 'off', product: 'Widget E', line: 'line3',shift: 'Gündüz'  },
    { id: 6, code: 'M/C 06', status: 'running', product: 'Widget F', line: 'line3',shift: 'Gündüz'  },
        { id: 1, code: 'M/C 01', status: 'running', product: 'Widget A', line: 'line1',shift: 'Gündüz'  },
    { id: 2, code: 'M/C 02', status: 'off', product: 'Widget B', line: 'line1',shift: 'Gündüz'  },
    { id: 3, code: 'M/C 03', status: 'running', product: 'Widget C', line: 'line2',shift: 'Gündüz'  },
    { id: 4, code: 'M/C 04', status: 'running', product: 'Widget D', line: 'line2',shift: 'Gündüz'  },
    { id: 5, code: 'M/C 05', status: 'off', product: 'Widget E', line: 'line3',shift: 'Gündüz'  },
    { id: 6, code: 'M/C 06', status: 'running', product: 'Widget F', line: 'line3',shift: 'Gündüz'  },

    { id: 6, code: 'M/C 06', status: 'running', product: 'Widget F', line: 'line3',shift: 'Gündüz'  },
        { id: 1, code: 'M/C 01', status: 'running', product: 'Widget A', line: 'line1',shift: 'Gündüz'  },
    { id: 2, code: 'M/C 02', status: 'off', product: 'Widget B', line: 'line1',shift: 'Gündüz'  },
    { id: 3, code: 'M/C 03', status: 'running', product: 'Widget C', line: 'line2' ,shift: 'Gündüz' },
    { id: 4, code: 'M/C 04', status: 'running', product: 'Widget D', line: 'line2',shift: 'Gündüz'  },
    { id: 5, code: 'M/C 05', status: 'off', product: 'Widget E', line: 'line3' ,shift: 'Gündüz' },
    { id: 6, code: 'M/C 06', status: 'running', product: 'Widget F', line: 'line3' ,shift: 'Gündüz' },
        { id: 1, code: 'M/C 01', status: 'running', product: 'Widget A', line: 'line1' },
    { id: 2, code: 'M/C 02', status: 'off', product: 'Widget B', line: 'line1' },
    { id: 3, code: 'M/C 03', status: 'running', product: 'Widget C', line: 'line2' },
    { id: 4, code: 'M/C 04', status: 'running', product: 'Widget D', line: 'line2' },
    { id: 5, code: 'M/C 05', status: 'off', product: 'Widget E', line: 'line3' },
    { id: 6, code: 'M/C 06', status: 'running', product: 'Widget F', line: 'line3' },
        { id: 1, code: 'M/C 01', status: 'running', product: 'Widget A', line: 'line1' },
    { id: 2, code: 'M/C 02', status: 'off', product: 'Widget B', line: 'line1' },
    { id: 3, code: 'M/C 03', status: 'running', product: 'Widget C', line: 'line2' },
    { id: 4, code: 'M/C 04', status: 'running', product: 'Widget D', line: 'line2' },
    { id: 5, code: 'M/C 05', status: 'off', product: 'Widget E', line: 'line3' },
    { id: 6, code: 'M/C 06', status: 'running', product: 'Widget F', line: 'line3' },
        { id: 1, code: 'M/C 01', status: 'running', product: 'Widget A', line: 'line1' },
    { id: 2, code: 'M/C 02', status: 'off', product: 'Widget B', line: 'line1' },
    { id: 3, code: 'M/C 03', status: 'running', product: 'Widget C', line: 'line2' },
    { id: 4, code: 'M/C 04', status: 'running', product: 'Widget D', line: 'line2' },
    { id: 5, code: 'M/C 05', status: 'off', product: 'Widget E', line: 'line3' },
    { id: 6, code: 'M/C 06', status: 'running', product: 'Widget F', line: 'line3' },
    { id: 6, code: 'M/C 06', status: 'running', product: 'Widget F', line: 'line3' },
    // diğer makineler...
  ];

  get filteredMachines() {
    return this.machines.filter(m => m.line === this.selectedLine);
  }

  onLineChange(event: any) {
    this.selectedLine = event.target.value;
  }
}