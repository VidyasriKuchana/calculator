import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent {

 name : string="Aadhya";
 age : number=24;
 handleSub(){
   console.log("Name: "+this.name+" Age : "+this.age);
 }
 one : number=0;
 two : number=0;
 msg : string="";
 x: number=0;
 sum(){
 this.x  = this.one+this.two
   this.msg="The sum of two numbers = "+this.x;
 }
 subtract(){
 this.x= this.one-this.two
   this.msg="The difference between two numbers = "+this.x;
 }
 product(){
  this.x=this.one*this.two
   this.msg="The product of two numbers is "+this.x;
 }
}
