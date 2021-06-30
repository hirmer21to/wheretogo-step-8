import { Component, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';
import { LectureService } from '../shared/lecture.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styles: []
})
export class TimetableComponent implements OnInit {
  lectures: Lecture[] = [];

  constructor(private lectureService: LectureService) { }

  ngOnInit() {
    this.getLectures();
  }

  getLectures(): void {
    this.lectureService.getLectures()
    .subscribe(lectures => this.lectures = lectures);
  }

  delete(lecture: Lecture): void {
    this.lectures = this.lectures.filter(l => l !== lecture);
    this.lectureService.deleteLecture(lecture).subscribe();
  }

  deleteAll(): void {
    for(let lecture of this.lectures){
      this.delete(lecture);
    }
  }

}
