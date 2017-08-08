import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {HelloAngularComponent} from "./components/hello-angular/hello-angular.component";

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@NgModule({
    declarations: [
        HelloAngularComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        HelloAngularComponent
    ]
})
export class AppModule{}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);