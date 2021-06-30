import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LectureDetailsComponent } from './lecture-details.component';

describe('LectureDetailsComponent', () => {
  let component: LectureDetailsComponent;
  let fixture: ComponentFixture<LectureDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
