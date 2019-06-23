import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { Candidate } from '../../candidate';
import {ChangeDetectionStrategy} from "@angular/core";
import { Search } from '../../search';

@Component({
  selector: 'app-candidate-list-group-item',
  templateUrl: './candidate-list-group-item.component.html',
  styleUrls: ['./candidate-list-group-item.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CandidateListGroupItemComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<Candidate>();


  public search : Search;
  public candidates : Candidate[];
  deleteFlagCount : number = 0;


  constructor(private apiService : ApiService) { 
    this.searchCandidates("");
  }



  ngOnInit() {
    
  }


  receiveMessage($event){
    this.search = $event;
  }


  //Send candidate detail to Form from parent component (candidatelist.component).
  insertDataToForm(cand : Candidate) : void { 
    this.messageEvent.emit(cand);
  }



  public searchCandidates(searchStr : string){
    this.deleteFlagCount = 0;
    if(searchStr == undefined){
      searchStr = "";
    }
    this.apiService.searchCandidates(searchStr,"Fullname").subscribe((res) =>{
      for(let cand of res){
        this.apiService.getPositionApply(cand.ID).subscribe((pos) => {
          if(pos === null){
            pos = {
              ID : "",
              Name : ""
            }
          }
          cand.PositionApply = pos;
        });
        this.apiService.getAction(cand.ID).subscribe((res) => {
          if(res === null){
            res = "";
          }
          cand.Action = res.Action;
        });

        if(cand.DeleteFlag === "Y"){
          this.deleteFlagCount++;
        }

      }


      this.candidates = res;
    });


  }




}
