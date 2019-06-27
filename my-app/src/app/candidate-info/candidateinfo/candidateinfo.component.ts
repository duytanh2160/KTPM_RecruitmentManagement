import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidateinfo',
  templateUrl: './candidateinfo.component.html',
  styleUrls: ['./candidateinfo.component.css']
})
export class CandidateinfoComponent implements OnInit {

  paramsID : number;
  Candidate : any;
  InterviewingList : any;
  OfferingList : any;
  ProbationList : any;
  CandBeforeUpdate : any;

  isEditing : boolean;
  isProcessing : boolean;

  constructor(private route: ActivatedRoute,private router: Router,private apiService : ApiService) { }

  ngOnInit() {
    this.getStringQuery.subscribe((res : number) =>{
        this.paramsID = res;
        this.getInterviewingList(res);
        this.getOfferingList(res);
        this.getProbationList(res);
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
          this.getResult(res1.Action);
        });
        this.Candidate = res[0];
      }
    );
  }
  getResult(Action){
    if(Action === "Interviewing"){
      this.Candidate.Result = this.InterviewingList.Result;
    }else if(Action === "Offering"){
      this.Candidate.Result = this.OfferingList.Result;
    }else if(Action === "Probation"){
      this.Candidate.Result = this.ProbationList.Result;
    }
    this.CandBeforeUpdate = JSON.parse(JSON.stringify(this.Candidate));
    console.log(this.CandBeforeUpdate);
    // console.log("Result: ",this.Candidate.Result);
  }
  getInterviewingList(candID){
    this.apiService.getInterviewings().subscribe(
      (res) => {
        var obj = JSON.parse(JSON.stringify(res.filter(x => x.CandidateID === candID)));
        if(JSON.stringify(obj) !== JSON.stringify([])){
        obj[0].Date = obj[0].Date.substr(0,16).replace("T"," ");
        }
        this.InterviewingList = obj[0];
        console.log("Interviewing: ",this.InterviewingList);
      }
    );
  }
  getOfferingList(candID){
    this.apiService.getOfferrings().subscribe(
      res => {
        var obj = JSON.parse(JSON.stringify(res.filter(x => x.CandidateID === candID)));
        this.OfferingList = obj[0];
        console.log("OfferingList: ",this.OfferingList);
      }
    );
  }
  getProbationList(candID){
    this.apiService.getProbations().subscribe(
      res => {
        var obj = JSON.parse(JSON.stringify(res.filter(x => x.CandidateID === candID)));
        if(JSON.stringify(obj) !== JSON.stringify([])){
        obj[0].StartDate = obj[0].StartDate.substr(0,10);
        obj[0].EndDate = obj[0].EndDate.substr(0,10);
        }
        this.ProbationList = obj[0];
        console.log("ProbationList: ",this.ProbationList);
      }
    );
  }
  onEditButtonClick(){
    this.isEditing = true;
  }
  showAlert(text, type) {
    if (type === "success") {
      Swal.fire({
        position: 'center',
        type: 'success',
        title: text,
        showConfirmButton: false,
        timer: 1000
      });
    }
    else if (type === "error") {
      Swal.fire({
        position: 'center',
        type: 'error',
        title: text,
        showConfirmButton: true,
      });
    }
  }
  validateForm(cand : any){
    if (JSON.stringify(this.CandBeforeUpdate) === JSON.stringify(cand)) {
      this.showAlert("There's nothing change !", "error");
      return false;
    }


    return true;
  }
  onSaveButtonClick(cand){
    console.log("Update: ",cand);
    this.isEditing = false;
    if(this.validateForm(cand)){
    this.isProcessing = true;
    this.apiService.updateCandidate(cand).subscribe(
      (res) => {
        if (res.result === "Successful") {
          this.isProcessing = false;
          this.showAlert("Update Completed !", "success");
          this.CandBeforeUpdate = JSON.parse(JSON.stringify(this.Candidate));
        }
      }, (err) =>{
        console.error("Error: ",err.error.text);
        this.isProcessing = false;
        this.showAlert("Update Failed !", "error");
        this.Candidate = JSON.parse(JSON.stringify(this.CandBeforeUpdate));
      }
    );

    }
  }

}
