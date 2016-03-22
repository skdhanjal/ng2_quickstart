/**
 * Created by shashik on 3/19/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hi All, This is {{name}}</h1>'
})
export class AppComponent {
    name:string;

    constructor(){
    	this.name='Dhanjal';
    }
    get Name(){
    	return this.name;
    }
    set Name(name){
    	this.name = name;
    }
}