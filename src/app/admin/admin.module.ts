import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddIntentComponent } from './add-intent/add-intent.component';
import { EditIntentComponent } from './edit-intent/edit-intent.component';
import { ShowIntentComponent } from './show-intent/show-intent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { adminRoutes } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AddIntentComponent,
    EditIntentComponent,
    ShowIntentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes),
    HttpClientModule,
    NbDialogModule.forChild(),
  ]
})
export class AdminModule { }
