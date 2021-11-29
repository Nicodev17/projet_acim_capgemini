import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { FormCollaboratorSituationComponent } from './form-collaborator/form-collaborator-situation/form-collaborator-situation.component';
import { ListAdminComponent } from './administration/list-admin/list-admin.component';
import { ItemAdminComponent } from './administration/item-admin/item-admin.component';
import { HomeComponent } from './home/home.component';
import { FormEditorComponent } from './form-edition/form-editor/form-editor.component';
import { ProfilDetailsComponent } from './profil-details/profil-details.component';
import { ProfilDetailsEditorComponent } from './profil-details-editor/profil-details-editor.component';
import { FormVideoComponent } from './form-collaborator/form-video/form-video.component';
import { FormCollaboratorLatestMissionComponent } from './form-collaborator/form-collaborator-latest-mission/form-collaborator-latest-mission.component';
import { FormCollaboratorNextMissionComponent } from './form-collaborator/form-collaborator-next-mission/form-collaborator-next-mission.component';
import { AccessGuardGuard } from './shared/services/access-guard.guard';
import { AdminGuard } from './shared/services/admin.guard';

const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component:HomeComponent},
  {path: "form/latest", component: FormCollaboratorLatestMissionComponent},
  {path: "form/next", component: FormCollaboratorNextMissionComponent},
  {path: "form", component: FormCollaboratorSituationComponent},
  {path: "form-editor", component: FormEditorComponent, canActivate:[AdminGuard]},
  {path: "list-admin", component: ListAdminComponent, canActivate:[AdminGuard]},
  {path: "profil-details", component: ProfilDetailsComponent, canActivate:[AccessGuardGuard]},
  {path: "profil-details-editor", component: ProfilDetailsEditorComponent, canActivate:[AdminGuard]},
  {path: "upload-video", component: FormVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
