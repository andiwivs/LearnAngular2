import { Component } from "@angular/core";
//import { HttpModule } from "@angular/http";
//import "rxjs/Rx"; // loads all features

import { ProductService } from "./products/product.service";

@Component({
    moduleId: module.id,
    selector: "pm-app",
    template: `
        <div>
            <h1>{{ pageTitle }}</h1>
            <pm-products></pm-products>
        </div>
    `,
    providers: [ /*HttpModule,*/ ProductService ]
})
export class AppComponent {
    pageTitle: string = "ACME Product Management";
}