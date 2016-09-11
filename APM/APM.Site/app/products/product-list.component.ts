import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    selector: "pm-products",
    templateUrl: "product-list.component.html",
    styleUrls: ["product-list.component.css"]
})
export class ProductListComponent implements OnInit {
    
    // properties
    pageTitle: string = "Product List";
    filterText: string;
    imageVisible: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    products: IProduct[];
    errorMessage: string;

    // constructor
    constructor(private _productService: ProductService) {

    }

    // event handler methods
    toggleImage(): void {
        this.imageVisible = !this.imageVisible;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List - DEBUG: " + message;
    }

    // component lifecycle event handler methods
    ngOnInit(): void {

        this.products = this._productService.getProducts();
        /*
        this.products = this._productService
                                .getProducts()
                                .subscribe(
                                    products => this.products = products,
                                    error => this.errorMessage = <any>error);
        */
    }
}