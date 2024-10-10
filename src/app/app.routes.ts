import { Routes } from '@angular/router';
import { StartComponent } from './views/start/start.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export const routes: Routes = [
    { path: "index", title: "Start", component: StartComponent },
    { path: "", redirectTo: "index", pathMatch: "full" },
    { path: "**", title: "404", component: NotFoundComponent }
];