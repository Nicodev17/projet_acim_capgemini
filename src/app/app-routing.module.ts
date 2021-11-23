import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { FormCollaboratorSituationComponent } from './form-collaborator/form-collaborator-situation/form-collaborator-situation.component';
import { ListAdminComponent } from './administration/list-admin/list-admin.component';
import { HomeComponent } from './home/home.component';
import { FormEditorComponent } from './form-edition/form-editor/form-editor.component';
import { ProfilDetailsComponent } from './profil-details/profil-details.component';
import { ProfilDetailsEditorComponent } from './profil-details-editor/profil-details-editor.component';
import { FormVideoComponent } from './form-collaborator/form-video/form-video.component';

const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component:HomeComponent},
  {path: "form", component: FormCollaboratorSituationComponent},
  {path: "form-editor", component: FormEditorComponent},
  {path: "list-admin", component: ListAdminComponent},
  {path: "profil-details", component: ProfilDetailsComponent},
  {path: "profil-details-editor", component: ProfilDetailsEditorComponent},
  {path: "upload-video", component: FormVideoComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
