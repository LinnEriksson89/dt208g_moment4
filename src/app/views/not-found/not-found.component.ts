import { Component } from '@angular/core';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

    catImage: string = "./images/cat.jpg";
    catImageAlt: string = "Kattunge i skogen, bild från pixabay.com"
}
