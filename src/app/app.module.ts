import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './stick-components/header/header.component';
import { FooterComponent } from './stick-components/footer/footer.component';
import { ListProfilComponent } from './dashboard-admin/list-profil/list-profil.component';
import { ItemProfilComponent } from './dashboard-admin/item-profil/item-profil.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { ProfilDetailsComponent } from './profil-details/profil-details.component';
import { ListAdminComponent } from './administration/list-admin/list-admin.component';
import { ItemAdminComponent } from './administration/item-admin/item-admin.component';
import { FormAddAdminComponent } from './administration/form-add-admin/form-add-admin.component';
import { FormEditorSituationComponent } from './form-edition/form-editor-situation/form-editor-situation.component';
import { FormEditorLatestMissionComponent } from './form-edition/form-editor-latest-mission/form-editor-latest-mission.component';
import { FormEditorNextMissionComponent } from './form-edition/form-editor-next-mission/form-editor-next-mission.component';
import { FormEditorAddQuestionComponent } from './form-edition/form-editor-add-question/form-editor-add-question.component';
import { VideoEditorComponent } from './form-edition/video-editor/video-editor.component';
import { DashboardCollaboratorComponent } from './dashboard-collaborator/dashboard-collaborator.component';
import { FormEditorComponent } from './form-edition/form-editor/form-editor.component';
import { FormCollaboratorSituationComponent } from './form-collaborator/form-collaborator-situation/form-collaborator-situation.component';
import { FormCollaboratorLatestMissionComponent } from './form-collaborator/form-collaborator-latest-mission/form-collaborator-latest-mission.component';
import { FormCollaboratorNextMissionComponent } from './form-collaborator/form-collaborator-next-mission/form-collaborator-next-mission.component';
import { FormVideoComponent } from './form-collaborator/form-video/form-video.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    ListProfilComponent,
    ItemProfilComponent,
    NavbarAdminComponent,
    ProfilDetailsComponent,
    ListAdminComponent,
    ItemAdminComponent,
    FormAddAdminComponent,
    FormEditorSituationComponent,
    FormEditorLatestMissionComponent,
    FormEditorNextMissionComponent,
    FormEditorAddQuestionComponent,
    VideoEditorComponent,
    DashboardCollaboratorComponent,
    FormEditorComponent,
    FormCollaboratorSituationComponent,
    FormCollaboratorLatestMissionComponent,
    FormCollaboratorNextMissionComponent,
    FormVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
