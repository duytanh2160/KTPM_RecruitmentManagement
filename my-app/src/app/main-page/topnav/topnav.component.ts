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
  Account : any;

  constructor(private titleService: Title,private route:ActivatedRoute, private router:Router) { 
    this.Account = JSON.parse(localStorage.getItem('user'));
    console.log(this.Account);

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log(this.route.root.firstChild.snapshot.children[0].data['title']);
        this.Title = this.route.root.firstChild.snapshot.children[0].data['title'];
        this.titleService.setTitle(this.Title);
      }
    });
  }

  ngOnInit() {

  }



  Logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/Login']);
  }

}