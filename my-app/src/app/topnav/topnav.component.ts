import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  Title : string = "";

  constructor(private titleService: Title,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log(this.route.root.firstChild.snapshot.data['title']);
        this.Title = this.route.root.firstChild.snapshot.data['title'];
        this.titleService.setTitle(this.Title);
      }
    });
  }

}
