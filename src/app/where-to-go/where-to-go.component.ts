import { Component, OnInit } from '@angular/core';
import { LectureService } from '../shared/lecture.service';
import { Lecture } from '../shared/lecture';

@Component({
  selector: 'app-where-to-go',
  templateUrl: './where-to-go.component.html',
  styles: []
})
export class WhereToGoComponent implements OnInit {

  constructor(private lectureService: LectureService) { }

  lectures: Lecture[] = [];
  nextLecture: Lecture = {id: 0, name:'', room:'', day:'', time: {hours: 0, minutes: 0}, building:'', floor:''};
  localTime: Date = new Date();
  isThereANextLecture: Boolean = false;
  tempLecture: Lecture = {
    id: 99,
    name: 'Dummy',
    room: '0',
    day: this.getWeekday(),
    time: { hours: 20, minutes: 15 },
    building: 'WE5',
    floor: '0',
  };


  ngOnInit() {
    this.getLectures();
    console.log(this.localTime.toDateString());
  }

  getLectures(): void {
    this.lectureService.getLectures()
      .subscribe(lectures => { this.lectures = lectures; this.getNextLecture() });
  }

  getWeekday(): string {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[this.localTime.getDay()];
  }

  getNextLecture(): void {
    let tempArray: Array<Lecture> = [];
    for (let lecture of this.lectures) {
      if (lecture.day === this.getWeekday()) {
        if (lecture.time.hours >= this.localTime.getHours()) {
          tempArray.push(lecture);
        }
      }
      for (let t of tempArray) {
        if (t.time.hours < this.tempLecture.time.hours) {
          this.tempLecture = t;
          this.isThereANextLecture = true;
        }
      }
      if (this.isThereANextLecture) {
        this.nextLecture = this.tempLecture;
      }
    }
  }
}




