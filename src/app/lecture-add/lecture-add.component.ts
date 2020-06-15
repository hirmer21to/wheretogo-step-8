import { Component, OnInit } from '@angular/core';
import { LectureService } from '../shared/lecture.service';
import { Lecture } from '../shared/lecture';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lecture-add',
  templateUrl: './lecture-add.component.html',
  styles: []
})
export class LectureAddComponent implements OnInit {
  lectures: Lecture[];
  fieldsEmpty: Boolean = false;

  constructor(
    private lectureService: LectureService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLectures();
  }

  getLectures(): void {
    this.lectureService.getLectures()
      .subscribe(lectures => this.lectures = lectures);
  }

  add(name: string, building: string,
    floor: string, room: string, day: string, hours: number, minutes: number,
    department?: string): void {
    let time = { hours, minutes };
    if (!name || !room || !day || !time || !building || !floor) {
      this.fieldsEmpty = true;
      return;
    }
    this.lectureService.addLecture({ name, building, floor, room, day, time, department } as Lecture)
      .subscribe(lecture => {
        this.lectures.push(lecture);
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
