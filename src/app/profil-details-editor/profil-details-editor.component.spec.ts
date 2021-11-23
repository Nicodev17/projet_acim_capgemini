import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDetailsEditorComponent } from './profil-details-editor.component';

describe('ProfilDetailsEditorComponent', () => {
  let component: ProfilDetailsEditorComponent;
  let fixture: ComponentFixture<ProfilDetailsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilDetailsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilDetailsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
