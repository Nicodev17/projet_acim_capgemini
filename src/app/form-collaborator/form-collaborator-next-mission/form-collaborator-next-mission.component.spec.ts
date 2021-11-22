import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCollaboratorNextMissionComponent } from './form-collaborator-next-mission.component';

describe('FormCollaboratorNextMissionComponent', () => {
  let component: FormCollaboratorNextMissionComponent;
  let fixture: ComponentFixture<FormCollaboratorNextMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCollaboratorNextMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCollaboratorNextMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
