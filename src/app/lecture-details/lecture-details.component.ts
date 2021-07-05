import { Component, OnInit, Input } from '@angular/core';
import { Lecture } from '../shared/lecture';
import { ActivatedRoute } from '@angular/router';
import { LectureService } from '../shared/lecture.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styles: []
})
export class LectureDetailsComponent implements OnInit {
  @Input() lecture: Lecture | undefined;

  constructor(
    private route: ActivatedRoute,
    private lectureService: LectureService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLecture();
  }

  getLecture(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // check if id is null
    if (id !== null) {
      this.lectureService
        .getLecture(parseInt(id))
        .subscribe(lecture => (this.lecture = lecture));
    }
  }

  save(): void {
    if (this.lecture) {
      this.lectureService
        .updateLecture(this.lecture)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
