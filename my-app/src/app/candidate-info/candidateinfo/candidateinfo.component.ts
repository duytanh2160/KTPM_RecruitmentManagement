import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidateinfo',
  templateUrl: './candidateinfo.component.html',
  styleUrls: ['./candidateinfo.component.css']
})
export class CandidateinfoComponent implements OnInit {

  paramsID : number;
  Candidate : any;

  constructor(private route: ActivatedRoute,private router: Router,private apiService : ApiService) { }

  ngOnInit() {
    this.getStringQuery.subscribe((res : number) =>{
        this.paramsID = res;
        console.log(res);
        this.getCandidate(res);
      }
    );


  }

   getStringQuery = new Observable((observer) => {
    var temp : number;
    this.route.paramMap.subscribe(params => {
      temp = +params.get('candidateID');
      if(isNaN(temp)){
        this.router.navigate(['/404']);
      }
      observer.next(temp);
      observer.complete()
    });
  });
  getCandidate(ID){
    this.apiService.searchCandidate(ID).subscribe(
      res =>{
        this.apiService.getAction(ID).subscribe((res1) => {
          if(res1 === null){
            res1 = "";
          }
          res[0].BirthDay = res[0].BirthDay.substr(0,10);
          res[0].Action = res1.Action;
        });
        this.Candidate = res[0];
        console.log(res);
      }
    );
  }

}
