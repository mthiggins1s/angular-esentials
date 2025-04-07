// a module is, once again, a CLASS.
import { NgModule } from "@angular/core";

// module that provides a collection of things that are needed by every app to run correctly.
// * When using Angular Modules, you MUST MUST MUST import this into your imports array for the app to work..
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

// this decorator takes a configuration object. ({})
@NgModule({
    // where you 'declare' all components that need to work together.
    declarations: [AppComponent,
        HeaderComponent,
        UserComponent,
        CardComponent,
        TasksComponent,
        TaskComponent,
        NewTaskComponent
    ],
    // takes an array of all the 'root' components that need to be set up for the application.
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule]
})
export class AppModule {}