import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../model/course";

@Pipe({
    name: "course",
    standalone: true
})

export class CoursePipe implements PipeTransform {
    transform(values: Course[], filter: string): Course[] {
        if (!filter || filter.length === 0) {
            return values;
        }

        if (values.length === 0) {
            return values;
        }

        return values.filter((value: Course) => {
            const codeFound = value.code.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            const nameFound = value.coursename.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            const progressionFound = value.progression.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

            if (codeFound || nameFound || progressionFound) {
                return value;
            } else {
                return "";
            }
        });
    }
}