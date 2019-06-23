import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-probation-list-group-item',
  templateUrl: './probation-list-group-item.component.html',
  styleUrls: ['./probation-list-group-item.component.css']
})
export class ProbationListGroupItemComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  public search : any;
  ProbationList : any[];
  deleteFlagCount : number = 0;

  constructor(private apiService: ApiService) { 
    
  }

  ngOnInit() {
    this.getProbationList();
  }




  getProbationList(){
    this.deleteFlagCount = 0;
    this.apiService.getProbations().subscribe(
      res => {
        for(let prob of res){
          prob.StartDate = prob.StartDate.substr(0,10);
          prob.EndDate = prob.EndDate.substr(0,10);
          this.apiService.searchCandidates(prob.CandidateID, "C.ID").subscribe(
            (res) => {
              prob.Candidate = res[0];
              prob.Candidate.PositionApply = {
                Name: "",
                ID : ""
              };
              this.apiService.getPositionApply(prob.Candidate.ID).subscribe((pos) => {
                prob.Candidate.PositionApply = pos;
              });
            }
          );

          if(prob.DeleteFlag === "Y"){
            this.deleteFlagCount++;
          }


        }


        this.ProbationList = res;
        console.log(res);
      }
    );
  }
  
  
  //Send data to Edit Form.
  sendDataToForm(probation : any){
    this.messageEvent.emit(probation);
  }
  receiveMessage($event){
    this.search = $event;
  }

}




