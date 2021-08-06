import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorDetailsComponent } from './character-creator-details.component';

describe('CharacterCreatorDetailsComponent', () => {
  let component: CharacterCreatorDetailsComponent;
  let fixture: ComponentFixture<CharacterCreatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreatorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
