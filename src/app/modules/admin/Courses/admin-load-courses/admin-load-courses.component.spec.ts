import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoadCoursesComponent } from './admin-load-courses.component';

describe('AdminLoadCoursesComponent', () => {
  let component: AdminLoadCoursesComponent;
  let fixture: ComponentFixture<AdminLoadCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoadCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoadCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
