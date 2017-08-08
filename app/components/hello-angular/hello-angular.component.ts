import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "hello-angular",
    templateUrl: "./hello-angular.component.html"
})
export class HelloAngularComponent{
    public userName: string;

    constructor(){
        this.userName = "Paul";
    }
}