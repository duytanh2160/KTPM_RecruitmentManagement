import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-interviewing-list-group-item',
  templateUrl: './interviewing-list-group-item.component.html',
  styleUrls: ['./interviewing-list-group-item.component.css']
})
export class InterviewingListGroupItemComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  InterviewingList : any[];
  public search : any;
  isLoadCompleted : boolean = false;
  

  constructor(private apiService : ApiService) {
    this.getInterviewingList();
   }

  ngOnInit() {

  }


  getInterviewingList(){
    this.apiService.getInterviewings().subscribe(
      (res) => {
        for (let itv of res) {
          this.apiService.searchCandidates(itv.CandidateID, "C.ID").subscribe(
            (res) => {
              itv.Candidate = res[0];
              itv.Candidate.PositionApply = {
                Name: "",
                ID : ""
              };
              this.apiService.getPositionApply(itv.Candidate.ID).subscribe((pos) => {
                itv.Candidate.PositionApply = pos;
              });
            }
          );


          itv.Date = itv.Date.substr(0,16).replace("T"," ");
        }



        this.InterviewingList = res;
      }
    );
  }




  //Send data to Edit Form.
  sendDataToForm(interviewing : any){
    this.messageEvent.emit(interviewing);
  }



  receiveMessage($event){
    this.search = $event;
  }


  test(a){
    console.log(a);
  }


}
