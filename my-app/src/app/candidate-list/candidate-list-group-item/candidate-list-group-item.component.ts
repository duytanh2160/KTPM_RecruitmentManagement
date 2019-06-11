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
    if(searchStr == undefined){
      searchStr = "";
    }
    this.apiService.searchCandidates(searchStr).subscribe((res) =>{

      for(let cand of res){
        this.apiService.getPositionApply(cand.ID).subscribe((pos) => {
          cand.PositionApply = pos;
        });

      }
      this.candidates = res;
    });


  }




}
