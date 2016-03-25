/**
 * Created by shashik on 3/19/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello, {{name}}</h1>'
})
export class AppComponent {
    name:string;

    constructor(){
    	this.name='Mr. Dhanjal';
    }
    get Name(){
    	return this.name;
    }
    set Name(name){
    	this.name = name;
    }
}