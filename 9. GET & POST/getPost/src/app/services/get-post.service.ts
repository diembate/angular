import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetPostService {
public API= "http://localhost:3200/courses"
  constructor(
    public http: HttpClient
  ) { }
  getAllTodo(): Observable<>{

  }
}
