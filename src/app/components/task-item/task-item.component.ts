import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
@Input() task!: Task;
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() OntoggleReminder: EventEmitter<Task> = new EventEmitter()

  faTimes = faTimes;

  onDelete(task: Task){
    console.log("deleting Task", task)
    this.onDeleteTask.emit(task)
  }

  Ontoggle(task: Task){
    this.OntoggleReminder.emit(task)
  }
}
