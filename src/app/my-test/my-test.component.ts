import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent  {
    public h1_id;
   ChangeColor(){
      
      var Newletters:string[] = '0123456789ABCDEF'.split('');
      var myColor:string = '#';
      for (var i:number = 0; i < 6; i++ ) {
          myColor += Newletters[Math.floor(Math.random() * 16)];
      }
       h1_id = {'color':myColor};
  }
   
  constructor() { } 
  }

 
