import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCollaboratorSituationComponent } from './form-collaborator-situation.component';

describe('FormCollaboratorSituationComponent', () => {
  let component: FormCollaboratorSituationComponent;
  let fixture: ComponentFixture<FormCollaboratorSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCollaboratorSituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCollaboratorSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
