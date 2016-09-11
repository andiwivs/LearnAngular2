import { NgModule }             from "@angular/core";
import { BrowserModule }        from "@angular/platform-browser";
import { FormsModule }          from "@angular/forms"; // required for ngModel bindings in custom components
import { HttpModule,  }         from "@angular/http";
import { AppComponent }         from "./app.component";
import { StarComponent }        from "./shared/star.component";
import { ProductListComponent } from "./products/product-list.component";
import { ProductFilterPipe }    from "./products/product-filter.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, StarComponent, ProductListComponent, ProductFilterPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
