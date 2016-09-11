﻿import { NgModule }             from "@angular/core";
import { BrowserModule }        from "@angular/platform-browser";
import { FormsModule }          from "@angular/forms"; // required for ngModel bindings in custom components
import { HttpModule,  }         from "@angular/http";

import { AppComponent }         from "./app.component";
import { routing, appRoutingProviders } from './app.routing';

import { ProductService } from "./products/product.service";

import { StarComponent }        from "./shared/star.component";
import { ProductFilterPipe }    from "./products/product-filter.pipe";

import { WelcomeComponent }     from "./home/welcome.component";
import { ProductListComponent } from "./products/product-list.component";
import { ProductDetailComponent } from "./products/product-detail.component";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [AppComponent, StarComponent, ProductFilterPipe, ProductListComponent, ProductDetailComponent, WelcomeComponent, ProductListComponent],
    providers: [ProductService,appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
