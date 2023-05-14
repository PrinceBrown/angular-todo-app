import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Task } from 'src/app/Task';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})


export class TaskService {

  private apiURL = 'http://localhost:3000/tasks'

  constructor(private fetch: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.fetch.get<Task[]>(this.apiURL);
  }


  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.fetch.delete<Task>(url);

  }



  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.fetch.put<Task>(url, task, httpOptions)

  }


  addTask(task: Task): Observable<Task> {
    return this.fetch.post<Task>(this.apiURL, task, httpOptions);

  }



}
