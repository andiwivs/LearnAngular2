"use strict";
var welcome_component_1 = require("./home/welcome.component");
var product_list_component_1 = require("./products/product-list.component");
var product_detail_component_1 = require("./products/product-detail.component");
exports.AppRoutes = [
    { path: "", component: welcome_component_1.WelcomeComponent },
    { path: "welcome", component: welcome_component_1.WelcomeComponent },
    { path: "products", component: product_list_component_1.ProductListComponent },
    { path: "product/:id", component: product_detail_component_1.ProductDetailComponent }
];
exports.AppRoutingProviders = [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes); 
//# sourceMappingURL=app.routing.js.map