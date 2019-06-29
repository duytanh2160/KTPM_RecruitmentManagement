import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from 'src/app/search';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-probation-list-search',
  templateUrl: './probation-list-search.component.html',
  styleUrls: ['./probation-list-search.component.css']
})
export class ProbationListSearchComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<Search>();
  JobLevelList : any[];
  JobList : any[];

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getJobLevelsList();
    this.getJobList();
  }



  //Passing data to parent (candidate-list-group-item)
  onSearchSubmit(search : any) : void { 
    this.messageEvent.emit(search);
  }
  //Get JobLevel List
  getJobLevelsList(){
    this.apiService.getJobLevels().subscribe(
      res =>{
        this.JobLevelList = res;
    });
  }
  getJobList(){
    this.apiService.getJobs().subscribe(
      res =>{
        this.JobList = res;
    });
  }

}
