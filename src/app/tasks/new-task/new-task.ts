import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { type NewTaskData } from '../task/task.mode';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  imports: [FormsModule],

})
export class NewTaskComponent {

  @Input({required:true})isAddingTask!: boolean;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(){
    this.cancel.emit()
  }
  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
