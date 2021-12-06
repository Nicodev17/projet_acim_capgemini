import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddIntermissionComponent } from './form-add-intermission.component';

describe('FormAddIntermissionComponent', () => {
  let component: FormAddIntermissionComponent;
  let fixture: ComponentFixture<FormAddIntermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddIntermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddIntermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
