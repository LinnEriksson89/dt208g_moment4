import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
    courselist:Course[] = [];

    constructor(private courseservice: CoursesService) {}

    ngOnInit() {
        this.courseservice.getCourses().subscribe(data => {
            this.courselist = data;
        })
    }
}
