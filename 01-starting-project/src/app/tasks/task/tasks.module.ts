import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TasksComponent } from "../tasks.component";
import { TaskComponent } from "./task.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
    TasksComponent,
    TaskComponent,
    NewTaskComponent],
    // only the TasksComponent needs to be exported, because out of these three in the array, the TasksComponent is the only one being used else where (within the AppComponent template).
    exports: [TasksComponent],
    imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule{}