import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './skills.html'
})
export class Skills {
  skills = ['Angular', 'TypeScript', 'HTML', 'CSS', 'Angular Material', 'Git'];
}
