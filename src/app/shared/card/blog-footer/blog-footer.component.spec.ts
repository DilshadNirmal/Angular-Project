import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFooterComponent } from './blog-footer.component';

describe('BlogFooterComponent', () => {
  let component: BlogFooterComponent;
  let fixture: ComponentFixture<BlogFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogFooterComponent]
    });
    fixture = TestBed.createComponent(BlogFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
