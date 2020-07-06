import { Routes } from '@angular/router';
import { AddIntentComponent } from './add-intent/add-intent.component';
import { EditIntentComponent } from './edit-intent/edit-intent.component';
import { ShowIntentComponent } from './show-intent/show-intent.component';

export const adminRoutes: Routes = [
    { path: '', redirectTo: 'show-intent', pathMatch: 'full' },
    { path: 'add-intent', component: AddIntentComponent },
    { path: 'edit-intent', component: EditIntentComponent },
    { path: 'show-intent', component: ShowIntentComponent },
];
