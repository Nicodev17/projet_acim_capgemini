import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCollaboratorLatestMissionComponent } from './form-collaborator-latest-mission.component';

describe('FormCollaboratorLatestMissionComponent', () => {
  let component: FormCollaboratorLatestMissionComponent;
  let fixture: ComponentFixture<FormCollaboratorLatestMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCollaboratorLatestMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCollaboratorLatestMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
