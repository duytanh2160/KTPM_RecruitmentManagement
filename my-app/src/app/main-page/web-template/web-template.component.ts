import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-template',
  templateUrl: './web-template.component.html',
  styleUrls: ['./web-template.component.css']
})
export class WebTemplateComponent implements OnInit {
  Account : any;

  constructor(private router:Router) {
    this.Account = JSON.parse(localStorage.getItem('user'));
    if(this.Account.RoleName === 'InterviewingAdmin'){
      this.router.navigate(['/Main/Interviewing']);
    }else if(this.Account.RoleName === 'OfferingAdmin'){
      this.router.navigate(['/Main/Offering']);
    }else if(this.Account.RoleName === 'ProbationAdmin'){
      this.router.navigate(['/Main/Probation']);
    }else if(this.Account.RoleName === 'CandidateAdmin'){
      this.router.navigate(['/Main']);
    }
    
   }

  ngOnInit() {
  }

}
