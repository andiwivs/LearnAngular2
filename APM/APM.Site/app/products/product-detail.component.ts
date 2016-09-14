import { Component, OnInit } from "@angular/core";
import { ActivatedRoute , Router } from "@angular/router";

import { IProduct } from "./product";

@Component({
    templateUrl: "./app/products/product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {

    pageTitle: string = "Product Detail";
    product: IProduct;

    constructor(private _route: ActivatedRoute, private _router: Router) {}

    onBack(): void {
        this._router.navigate(["/products"]);   
    }

    ngOnInit(): void {
        // use snapshot to gain quick access to route values
        // note: route params are also Observable as can be dynamic, snapshot is used for simpler requirements
        let id: number = this._route.snapshot.params["id"];
        this.pageTitle = this.pageTitle + " [id: " + id + "]";
    }

    /* TODO: get this to work - typescript issue with map method
    ngOnInit() {
        this._route.params
          .map(params => params['id'])
          .subscribe((id) => {
            this.contactsService
              .getContact(id)
              .subscribe(contact => this.contact = contact);
          });
    }
    */
}