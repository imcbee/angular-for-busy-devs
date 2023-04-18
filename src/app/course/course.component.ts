import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  title = 'List of courses';
  courses;

  constructor(service: CourseService) {
    //! when you add that dependency as a parameter of a constructor
    //! you have decoupled the class from the dependency.

    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
