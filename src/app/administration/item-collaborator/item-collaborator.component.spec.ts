import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCollaboratorComponent } from './item-collaborator.component';

describe('ItemCollaboratorComponent', () => {
  let component: ItemCollaboratorComponent;
  let fixture: ComponentFixture<ItemCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCollaboratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
