import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorNextMissionComponent } from './form-editor-next-mission.component';

describe('FormEditorNextMissionComponent', () => {
  let component: FormEditorNextMissionComponent;
  let fixture: ComponentFixture<FormEditorNextMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditorNextMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorNextMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
