import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
@Component({
  selector: 'app-set-limits',
  templateUrl: './set-limits.component.html',
  styleUrl: './set-limits.component.css'
})
export class SetLimitsComponent {

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
