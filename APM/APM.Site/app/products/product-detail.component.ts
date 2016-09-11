import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./app/products/product-detail.component.html"
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail";

    constructor(private _router: Router) {}

    onBack(): void {
        this._router.navigate(["/products"]);   
    } 
}