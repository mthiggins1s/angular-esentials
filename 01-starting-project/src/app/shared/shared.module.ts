import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";


// we only need 'bootstrap' in the root module (main.ts - AppComponent).
@NgModule({
    declarations: [CardComponent],
    // where you define all modules that are not just needed internally, but should also be made available to any other module that imports the 'shared' module.
    // adding the 'SharedModule' to the AppModule imports will now allow the CardComponent to be made available, without it being present in the declarations array of the AppModule. It also must be in the exports array too.
    exports: [CardComponent]
})
export class SharedModule {}