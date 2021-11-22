import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { FormCollaboratorSituationComponent } from './form-collaborator/form-collaborator-situation/form-collaborator-situation.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListAdminComponent } from './administration/list-admin/list-admin.component';
import { ItemAdminComponent } from './administration/item-admin/item-admin.component';

const routes: Routes = [
  {path:"", component: LoginPageComponent},
  {path: "form", component: FormCollaboratorSituationComponent},
  {path:"list-admin", component: ListAdminComponent},
  {path:"item-admin", component: ItemAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
