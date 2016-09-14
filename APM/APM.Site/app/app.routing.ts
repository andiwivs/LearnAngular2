import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { WelcomeComponent } from "./home/welcome.component";
import { ProductListComponent } from "./products/product-list.component";
import { ProductDetailComponent } from "./products/product-detail.component";

export const AppRoutes: Routes = [
    { path: "", component: WelcomeComponent},
    { path: "welcome", component: WelcomeComponent  },
    { path: "products", component: ProductListComponent },
    { path: "product/:id", component: ProductDetailComponent }
];

export const AppRoutingProviders: any[] = [];

//export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);