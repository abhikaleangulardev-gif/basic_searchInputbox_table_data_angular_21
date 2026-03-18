import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentDashboard } from "./component/student-dashboard/student-dashboard";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, StudentDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('searchStudentDashboard');
}
