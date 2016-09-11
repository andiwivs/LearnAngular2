"use strict";
var router_1 = require("@angular/router");
var welcome_component_1 = require("./home/welcome.component");
var product_list_component_1 = require("./products/product-list.component");
var product_detail_component_1 = require("./products/product-detail.component");
var appRoutes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "welcome", component: welcome_component_1.WelcomeComponent, },
    { path: "products", component: product_list_component_1.ProductListComponent },
    { path: "product/:id", component: product_detail_component_1.ProductDetailComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map