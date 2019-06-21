import { Component, OnInit, Input, EventEmitter, Output , ViewChild} from '@angular/core';
import { Search } from '../../search';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-interviewing-list-search',
  templateUrl: './interviewing-list-search.component.html',
  styleUrls: ['./interviewing-list-search.component.css']
})
export class InterviewingListSearchComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<Search>();
  JobLevelList : any[];
  JobList : any[];

  constructor(private apiService : ApiService) {
    this.getJobLevelsList();
    this.getJobList();
   }

  ngOnInit() {
  }





  //Passing data to parent (candidate-list-group-item)
  onSearchSubmit(search : Search) : void { 
    this.messageEvent.emit(search);
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
  
}
