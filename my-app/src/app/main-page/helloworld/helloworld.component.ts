import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {



  constructor() { 
 }

  ngOnInit() {
    window.location.href="https://prod.liveshare.vsengsaas.visualstudio.com/join?C4067F80A118D1984AF128666702C56D22C9";
  }

}
