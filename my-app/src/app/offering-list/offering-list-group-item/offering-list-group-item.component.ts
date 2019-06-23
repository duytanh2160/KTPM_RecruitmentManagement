import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-offering-list-group-item',
  templateUrl: './offering-list-group-item.component.html',
  styleUrls: ['./offering-list-group-item.component.css']
})
export class OfferingListGroupItemComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  public search : any;
  OfferingList : any[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getOfferingList();
  }






  getOfferingList(){
    this.apiService.getOfferrings().subscribe(
      res => {
        for(let off of res){
          this.apiService.searchCandidates(off.CandidateID, "C.ID").subscribe(
            (res) => {
              off.Candidate = res[0];
              off.Candidate.PositionApply = {
                Name: "",
                ID : ""
              };
              this.apiService.getPositionApply(off.Candidate.ID).subscribe((pos) => {
                off.Candidate.PositionApply = pos;
              });
            }
          );
        }


        this.OfferingList = res;
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

}
