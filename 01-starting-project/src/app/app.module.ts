// a module is, once again, a CLASS.
import { NgModule } from "@angular/core";

// module that provides a collection of things that are needed by every app to run correctly.
// * When using Angular Modules, you MUST MUST MUST import this into your imports array for the app to work..
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/task/tasks.module";

// this decorator takes a configuration object. ({})
@NgModule({
    // where you 'declare' all components that need to work together.
    declarations: [AppComponent,
        HeaderComponent,
        UserComponent,
    ],
    // takes an array of all the 'root' components that need to be set up for the application.
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule]
})
export class AppModule {}