import { Injectable } from '@angular/core';
import { StudentDetails } from '../interface/studentdetails';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  students: StudentDetails[] = [
    { id: 1, name: 'Abhishek', marks: 80, city: 'Pune', branch: 'Computer', collegeName: 'SPPU' },
    { id: 2, name: 'Rahul', marks: 75, city: 'Mumbai', branch: 'Mechanical', collegeName: 'Mumbai University' },
    { id: 3, name: 'Sneha', marks: 90, city: 'Nagpur', branch: 'IT', collegeName: 'RTMNU' },
    { id: 4, name: 'Amit', marks: 85, city: 'Nashik', branch: 'Civil', collegeName: 'SPPU' },
    { id: 5, name: 'Priya', marks: 88, city: 'Kolhapur', branch: 'Electronics', collegeName: 'Shivaji University' },
    { id: 6, name: 'Rohit', marks: 70, city: 'Satara', branch: 'Computer', collegeName: 'SPPU' },
    { id: 7, name: 'Neha', marks: 92, city: 'Solapur', branch: 'IT', collegeName: 'Solapur University' },
    { id: 8, name: 'Kiran', marks: 65, city: 'Aurangabad', branch: 'Mechanical', collegeName: 'Dr BAMU' },
    { id: 9, name: 'Pooja', marks: 78, city: 'Thane', branch: 'Civil', collegeName: 'Mumbai University' },
    { id: 10, name: 'Sagar', marks: 83, city: 'Latur', branch: 'Computer', collegeName: 'SRTMU' },

    { id: 11, name: 'Anjali', marks: 89, city: 'Pune', branch: 'IT', collegeName: 'SPPU' },
    { id: 12, name: 'Vikas', marks: 72, city: 'Mumbai', branch: 'Mechanical', collegeName: 'Mumbai University' },
    { id: 13, name: 'Meena', marks: 91, city: 'Nagpur', branch: 'Computer', collegeName: 'RTMNU' },
    { id: 14, name: 'Ajay', marks: 67, city: 'Nashik', branch: 'Civil', collegeName: 'SPPU' },
    { id: 15, name: 'Komal', marks: 86, city: 'Kolhapur', branch: 'Electronics', collegeName: 'Shivaji University' },
    { id: 16, name: 'Deepak', marks: 74, city: 'Satara', branch: 'Computer', collegeName: 'SPPU' },
    { id: 17, name: 'Rani', marks: 93, city: 'Solapur', branch: 'IT', collegeName: 'Solapur University' },
    { id: 18, name: 'Sunil', marks: 69, city: 'Aurangabad', branch: 'Mechanical', collegeName: 'Dr BAMU' },
    { id: 19, name: 'Swati', marks: 82, city: 'Thane', branch: 'Civil', collegeName: 'Mumbai University' },
    { id: 20, name: 'Mahesh', marks: 77, city: 'Latur', branch: 'Computer', collegeName: 'SRTMU' },

    { id: 21, name: 'Pankaj', marks: 84, city: 'Pune', branch: 'IT', collegeName: 'SPPU' },
    { id: 22, name: 'Nisha', marks: 90, city: 'Mumbai', branch: 'Mechanical', collegeName: 'Mumbai University' },
    { id: 23, name: 'Aarti', marks: 88, city: 'Nagpur', branch: 'Computer', collegeName: 'RTMNU' },
    { id: 24, name: 'Rakesh', marks: 71, city: 'Nashik', branch: 'Civil', collegeName: 'SPPU' },
    { id: 25, name: 'Kavita', marks: 87, city: 'Kolhapur', branch: 'Electronics', collegeName: 'Shivaji University' },
    { id: 26, name: 'Sameer', marks: 76, city: 'Satara', branch: 'Computer', collegeName: 'SPPU' },
    { id: 27, name: 'Geeta', marks: 94, city: 'Solapur', branch: 'IT', collegeName: 'Solapur University' },
    { id: 28, name: 'Vijay', marks: 68, city: 'Aurangabad', branch: 'Mechanical', collegeName: 'Dr BAMU' },
    { id: 29, name: 'Pallavi', marks: 81, city: 'Thane', branch: 'Civil', collegeName: 'Mumbai University' },
    { id: 30, name: 'Nitin', marks: 79, city: 'Latur', branch: 'Computer', collegeName: 'SRTMU' },

    { id: 31, name: 'Tejas', marks: 85, city: 'Pune', branch: 'IT', collegeName: 'SPPU' },
    { id: 32, name: 'Minal', marks: 92, city: 'Mumbai', branch: 'Mechanical', collegeName: 'Mumbai University' },
    { id: 33, name: 'Suresh', marks: 73, city: 'Nagpur', branch: 'Computer', collegeName: 'RTMNU' },
    { id: 34, name: 'Bhavna', marks: 89, city: 'Nashik', branch: 'Civil', collegeName: 'SPPU' },
    { id: 35, name: 'Ganesh', marks: 66, city: 'Kolhapur', branch: 'Electronics', collegeName: 'Shivaji University' },
    { id: 36, name: 'Shweta', marks: 91, city: 'Satara', branch: 'Computer', collegeName: 'SPPU' },
    { id: 37, name: 'Prakash', marks: 75, city: 'Solapur', branch: 'IT', collegeName: 'Solapur University' },
    { id: 38, name: 'Alka', marks: 88, city: 'Aurangabad', branch: 'Mechanical', collegeName: 'Dr BAMU' },
    { id: 39, name: 'Dinesh', marks: 72, city: 'Thane', branch: 'Civil', collegeName: 'Mumbai University' },
    { id: 40, name: 'Varsha', marks: 95, city: 'Latur', branch: 'Computer', collegeName: 'SRTMU' },

    { id: 41, name: 'Kunal', marks: 83, city: 'Pune', branch: 'IT', collegeName: 'SPPU' },
    { id: 42, name: 'Reshma', marks: 90, city: 'Mumbai', branch: 'Mechanical', collegeName: 'Mumbai University' },
    { id: 43, name: 'Arun', marks: 74, city: 'Nagpur', branch: 'Computer', collegeName: 'RTMNU' },
    { id: 44, name: 'Pooja', marks: 86, city: 'Nashik', branch: 'Civil', collegeName: 'SPPU' },
    { id: 45, name: 'Santosh', marks: 78, city: 'Kolhapur', branch: 'Electronics', collegeName: 'Shivaji University' },
    { id: 46, name: 'Jyoti', marks: 92, city: 'Satara', branch: 'Computer', collegeName: 'SPPU' },
    { id: 47, name: 'Ramesh', marks: 69, city: 'Solapur', branch: 'IT', collegeName: 'Solapur University' },
    { id: 48, name: 'Anita', marks: 87, city: 'Aurangabad', branch: 'Mechanical', collegeName: 'Dr BAMU' },
    { id: 49, name: 'Hemant', marks: 80, city: 'Thane', branch: 'Civil', collegeName: 'Mumbai University' },
    { id: 50, name: 'Seema', marks: 93, city: 'Latur', branch: 'Computer', collegeName: 'SRTMU' }
  ];

  myStudentSub$: BehaviorSubject<StudentDetails[]> = new BehaviorSubject(this.students);


  getStudentList(stdname?: string) {
    return this.myStudentSub$.pipe(
      map((studentdata: StudentDetails[]) => {
        if (!stdname || stdname.trim() === '') return studentdata;

        return studentdata.filter((std: any) => std.name.toLowerCase().includes(stdname.trim().toLowerCase()));
      })
    );
  }
}
