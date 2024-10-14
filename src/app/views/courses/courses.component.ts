import { Component, QueryList, ViewChildren } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../model/course';
import { CommonModule } from '@angular/common';
import { SortingDirective, SortEvent, compare } from '../../services/sorting.directive';
import { FormsModule } from '@angular/forms';
import { CoursePipe } from '../../services/course.pipe';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, SortingDirective, FormsModule, CoursePipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
    originalCourseList:Course[] = [];
    courseList:Course[] = [];
    filter: string = "";
    
    @ViewChildren(SortingDirective)
    headers!: QueryList<SortingDirective>;

    constructor(private courseService: CoursesService) {}

    ngOnInit() {
        this.courseService.getCourses().subscribe(data => {
            this.originalCourseList = data;
            this.courseList = data;
        })
    }

    onSort({column, direction}: SortEvent){
        //Resetting other headers.
        this.headers.forEach((header) =>{
            if(header.sortable !== column) {
                header.direction = "";
            }
        })

        //Sorting courses.
        if(direction === "" || column === "") {
            this.courseList = this.originalCourseList;
        } else {
            this.courseList = [...this.originalCourseList].sort((a, b) => {
                const res = compare(a[column], b[column]);
                return direction === "asc" ? res : -res;
            });
        }
    }
}
