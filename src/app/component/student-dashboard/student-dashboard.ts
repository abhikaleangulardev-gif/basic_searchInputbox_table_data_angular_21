import { Component, OnInit } from '@angular/core';
import { Shared } from '../../service/shared';
import { StudentDetails } from '../../interface/studentdetails';
import { CommonModule } from '@angular/common';
import { Focus } from '../../directive/focus';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-student-dashboard',
  imports: [CommonModule, Focus],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.css',
})
export class StudentDashboard implements OnInit {
  myStudentDetails: StudentDetails[] = [];

  myStudentSub$: Subject<any> = new Subject();

  constructor(private shared: Shared) { }

  ngOnInit(): void {
    this.getStudentData();


    this.myStudentSub$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((_searchName: string) => {
        if (!_searchName || _searchName.trim() === '') {
          return this.shared.getStudentList(); // full data
        }
        return this.shared.getStudentList(_searchName);
      }))
    .subscribe({
        next: (_searchName: any) => {
          console.log(_searchName);
          this.myStudentDetails = _searchName;
        }
      })
  }

  getStudentData() {
    this.shared.getStudentList().subscribe({
      next: (_resp: StudentDetails[]) => {
        console.log(_resp);
        this.myStudentDetails = _resp;
      }
    })
  }

  onInputStudentName(event: Event) {
    const result = (event.target as HTMLInputElement).value;

    if (!result || result.trim() === '') {
      this.getStudentData();   // 🔥 instant reload
    } else {
      this.myStudentSub$.next(result);
    }
  }
}
