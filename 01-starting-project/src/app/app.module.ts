// a module is, once again, a CLASS.
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

// this decorator takes a configuration object. ({})
@NgModule({
    // where you 'declare' all components that need to work together.
    declarations: [AppComponent],
    // takes an array of all the 'root' components that need to be set up for the application.
    bootstrap: [AppComponent],
    imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppModule {}