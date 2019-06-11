import { Component, OnInit, Input, EventEmitter, Output , ViewChild} from '@angular/core';
import { CandidateListGroupItemComponent } from '../candidate-list-group-item/candidate-list-group-item.component';
import { Search } from '../../search';
import { ApiService } from '../../api.service';

@Component({
  providers:[ CandidateListGroupItemComponent ],
  selector: 'app-candidate-list-search',
  templateUrl: './candidate-list-search.component.html',
  styleUrls: ['./candidate-list-search.component.css']
})
export class CandidateListSearchComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<Search>();

  JobLevelList : any[];
  JobList : any[];

  constructor(private apiService : ApiService) {
    this.getJobLevelsList();
    this.getJobList();
  }

  ngOnInit() {

  }




    
  //Get JobLevel List
  getJobLevelsList(){
    this.apiService.getJobLevels().subscribe(
      res =>{
        this.JobLevelList = res;
    });
    console.log(this.JobLevelList); 
  }

  getJobList(){
    this.apiService.getJobs().subscribe(
      res =>{
        this.JobList = res;
    });
    console.log(this.JobList); 
  }


  //Passing data to parent (candidate-list-group-item)
  onSearchSubmit(search : Search) : void { 
    this.messageEvent.emit(search);
  }


}