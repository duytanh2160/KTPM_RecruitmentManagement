import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from 'src/app/search';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-offering-list-search',
  templateUrl: './offering-list-search.component.html',
  styleUrls: ['./offering-list-search.component.css']
})
export class OfferingListSearchComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<Search>();
  JobLevelList : any[];
  JobList : any[];

  //NgModel
  CurrentSalary : any = {
    From : null,
    To : null
  }
  ExpectSalary : any = {
    From : null,
    To : null
  }
  OfferingSalary : any = {
    From : null,
    To : null
  }

  
  constructor(private apiService : ApiService) { }
 
  ngOnInit() {
    this.getJobLevelsList();
    this.getJobList();
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
    }
    getJobList(){
      this.apiService.getJobs().subscribe(
        res =>{
          this.JobList = res;
      });
    }
}
