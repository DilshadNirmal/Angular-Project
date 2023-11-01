import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFooterComponent } from './course-footer.component';

describe('CourseFooterComponent', () => {
  let component: CourseFooterComponent;
  let fixture: ComponentFixture<CourseFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFooterComponent]
    });
    fixture = TestBed.createComponent(CourseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
