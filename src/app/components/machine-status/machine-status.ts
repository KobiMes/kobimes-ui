import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Machine } from '../../models/machine';

@Component({
  selector: 'app-machine-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine-status.html',
  styleUrls: ['./machine-status.scss']
})
export class MachineStatus {
  @Input() machines: Machine[] = [];
}
