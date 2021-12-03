import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIntermissionComponent } from './item-intermission.component';

describe('ItemProfilComponent', () => {
  let component: ItemIntermissionComponent;
  let fixture: ComponentFixture<ItemIntermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIntermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIntermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
