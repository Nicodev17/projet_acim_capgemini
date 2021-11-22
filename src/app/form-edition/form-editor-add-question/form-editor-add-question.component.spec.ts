import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorAddQuestionComponent } from './form-editor-add-question.component';

describe('FormEditorAddQuestionComponent', () => {
  let component: FormEditorAddQuestionComponent;
  let fixture: ComponentFixture<FormEditorAddQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditorAddQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
