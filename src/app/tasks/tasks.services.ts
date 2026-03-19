import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.mode";

@Injectable({providedIn: 'root'})
export class TasksService{
    private tasks = [{
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basci and advanced features of Angular & how to apply them.',
    dueDate: '2024-02-01'
  },
{
    id: 't2',
    userId: 'u2',
    title: 'Master Angular',
    summary: 'Learn all the basci and advanced features of Angular & how to apply them.',
    dueDate: '2024-02-01'
  },
{
    id: 't3',
    userId: 'u3',
    title: 'Master Angular',
    summary: 'Learn all the basci and advanced features of Angular & how to apply them.',
    dueDate: '2024-02-01'
  },
{
    id: 't4',
    userId: 'u4',
    title: 'Beginner Angular',
    summary: 'Learn all the basci and advanced features of Angular & how to apply them.',
    dueDate: '2024-02-01'
  }
    ];

    getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId )
    }

    addTask(taskData: NewTaskData, userId:string){
        this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
    })
    }

    removeTask(id:string){
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }
}