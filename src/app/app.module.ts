import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './stick-components/header/header.component';
import { FooterComponent } from './stick-components/footer/footer.component';
import { ListIntermissionComponent } from './dashboard-admin/list-intermission/list-intermission.component';
import { ItemIntermissionComponent } from './dashboard-admin/item-intermission/item-intermission.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { ProfilDetailsComponent } from './profil-details/profil-details.component';
import { ListAdminComponent } from './administration/list-admin/list-admin.component';
import { ItemAdminComponent } from './administration/item-admin/item-admin.component';
import { FormAddUserComponent } from './administration/form-add-user/form-add-user.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProfilDetailsEditorComponent } from './profil-details-editor/profil-details-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './shared/services/global.service';
import { AccessGuardGuard } from './shared/services/access-guard.guard';
import { AdminGuard } from './shared/services/admin.guard';
import { ListCollaboratorComponent } from './administration/list-collaborator/list-collaborator.component';
import { ItemCollaboratorComponent } from './item-collaborator/item-collaborator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    ListIntermissionComponent,
    ItemIntermissionComponent,
    NavbarAdminComponent,
    ProfilDetailsComponent,
    ListAdminComponent,
    ItemAdminComponent,
    FormAddUserComponent,
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
    FormVideoComponent,
    HomeComponent,
    ProfilDetailsEditorComponent,
    ListCollaboratorComponent,
    ItemCollaboratorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [GlobalService, AccessGuardGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
