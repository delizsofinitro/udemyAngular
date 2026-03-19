import { Component, Input } from '@angular/core';
import { type NewTaskData } from './task/task.mode';
import { TasksService } from './tasks.services';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [TaskComponent, NewTaskComponent],

})
export class TasksComponent {
  @Input({required:true})userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(id:string){
  }

  changeAddTaskStatus(){
        this.isAddingTask = !this.isAddingTask;
  }

  onAddTask(taskData: NewTaskData){

    this.changeAddTaskStatus()
    
  }
}
