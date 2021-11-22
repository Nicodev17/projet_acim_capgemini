import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorLatestMissionComponent } from './form-editor-latest-mission.component';

describe('FormEditorLatestMissionComponent', () => {
  let component: FormEditorLatestMissionComponent;
  let fixture: ComponentFixture<FormEditorLatestMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditorLatestMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorLatestMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
