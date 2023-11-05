import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStackComponent } from './book-stack.component';

describe('BookStackComponent', () => {
  let component: BookStackComponent;
  let fixture: ComponentFixture<BookStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookStackComponent]
    });
    fixture = TestBed.createComponent(BookStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
