import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MyIdeasComponent } from "./ideas/my-ideas.component";

const routes: Routes = [
    { path: "", redirectTo: "/ideas", pathMatch: "full" },
    { path: "ideas", component: MyIdeasComponent },
    { path: "account", component: MyIdeasComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
