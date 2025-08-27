import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Machine } from '../../models/machine';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.html',
  styleUrls: ['./summary.scss']
})
export class Summary {
  @Input() machines: Machine[] = [];

  @Input() productionTarget: number = 0;      // dışardan gelen toplam hedef
  @Input() productionAchieved: number = 0;   // dışardan gelen gerçekleşen

  get runningCount() {
    return this.machines.filter(m => m.status === 'running').length;
  }

  get offCount() {
    return this.machines.filter(m => m.status === 'off').length;
  }
}
