import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    //URL for data.
    private url: string = " https://webbutveckling.miun.se/files/ramschema_ht23.json";

    constructor(private http: HttpClient) { }

    //Function to get courses.
    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.url);
    }
}
