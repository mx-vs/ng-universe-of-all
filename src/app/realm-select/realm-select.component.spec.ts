import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmSelectComponent } from './realm-select.component';

describe('RealmSelectComponent', () => {
  let component: RealmSelectComponent;
  let fixture: ComponentFixture<RealmSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealmSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
