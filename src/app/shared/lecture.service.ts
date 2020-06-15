import { Injectable } from '@angular/core';
import { Lecture } from './lecture';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(private http: HttpClient) { }

  private lectureUrl = 'api/lectures';


  getLectures(): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(this.lectureUrl)
      .pipe(
        catchError(this.handleError('getLectures', []))
      );
  }

  getLecture(id: number): Observable<Lecture> {
    const url = `${this.lectureUrl}/${id}`;
    return this.http.get<Lecture>(url)
      .pipe(
        catchError(this.handleError<Lecture>(`getLecture id=${id}`))
      );
  }

  updateLecture(lecture: Lecture): Observable<any> {
    return this.http.put( this.lectureUrl, lecture, httpOptions)
    .pipe(
      catchError(this.handleError<any>('updateLecture'))
    );
  }
  
  addLecture(lecture: Lecture): Observable<Lecture> {
    return this.http.post<Lecture>(this.lectureUrl, lecture, httpOptions)
    .pipe(
      catchError(this.handleError<Lecture>('addLecture'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(operation + ' failed: ' + error);
      return of(result as T);
    }
  }

  deleteLecture(lecture: Lecture | number): Observable<Lecture> {
    const id = typeof lecture === 'number' ? lecture : lecture.id;
    const url = `${this.lectureUrl}/${id}`;
    return this.http.delete<Lecture>(url, httpOptions)
    .pipe(
      catchError(this.handleError<Lecture>('deleteLecture'))
    );
  }
}
