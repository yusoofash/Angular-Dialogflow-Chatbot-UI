import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatUiComponent } from './chat-ui/chat-ui.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';

const routes: Routes = [
  { path: '', component: ChatUiComponent },
  {
    path: 'admin', component: AdminLayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
