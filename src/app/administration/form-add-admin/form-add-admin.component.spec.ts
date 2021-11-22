import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAdminComponent } from './form-add-admin.component';

describe('FormAddAdminComponent', () => {
  let component: FormAddAdminComponent;
  let fixture: ComponentFixture<FormAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
