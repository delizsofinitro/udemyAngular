import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.mode';
import { CardComponent } from '../../shared/card/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}
