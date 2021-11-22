import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorSituationComponent } from './form-editor-situation.component';

describe('FormEditorSituationComponent', () => {
  let component: FormEditorSituationComponent;
  let fixture: ComponentFixture<FormEditorSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditorSituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
