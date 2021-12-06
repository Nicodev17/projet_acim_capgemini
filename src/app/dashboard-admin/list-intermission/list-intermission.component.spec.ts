import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIntermissionComponent } from './list-intermission.component';

describe('ListProfilComponent', () => {
  let component: ListIntermissionComponent;
  let fixture: ComponentFixture<ListIntermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIntermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIntermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
