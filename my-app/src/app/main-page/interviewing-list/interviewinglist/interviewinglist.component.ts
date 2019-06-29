import { Component, OnInit, ViewChild } from '@angular/core';
import { InterviewingListGroupItemComponent } from '../interviewing-list-group-item/interviewing-list-group-item.component';
import Swal from 'sweetalert2'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-interviewinglist',
  templateUrl: './interviewinglist.component.html',
  styleUrls: ['./interviewinglist.component.css']
})
export class InterviewinglistComponent implements OnInit {
  @ViewChild(InterviewingListGroupItemComponent) itvGroup : InterviewingListGroupItemComponent;

  isProcessing : boolean = false;
  isOffering : boolean = false;
  itvBeforeUpdate : any;

  JobLevelList: any[];
  currentInterviewing : any ={
    Result : "",
    InterviewerName : "",
    InterviewingID : "",
    Date : "",
    Note : "",
    Candidate : {
      Image : "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
    }
  }

  constructor(private apiService: ApiService) {
    this.getJobLevelsList();
   }

  ngOnInit() {
  }
  
  receiveMessage($event){
    this.isOffering = false;
    console.log("Edit Form: ",$event);

    this.currentInterviewing = JSON.parse(JSON.stringify($event));
    this.currentInterviewing.Date = this.currentInterviewing.Date.replace(" ","T");
    this.itvBeforeUpdate = JSON.parse(JSON.stringify(this.currentInterviewing));
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
  onResultChange($event){
    if($event.srcElement.value !== "Pass"){
      this.isOffering = false;
    }
  }
  //Get JobLevel List
  getJobLevelsList() {
    this.apiService.getJobLevels().subscribe(
      res => {
        this.JobLevelList = res;
      });
    console.log(this.JobLevelList);
  }




  onSubmit(itv: any) {
    if (this.validateForm(itv)) {
      this.onUpdateSubmit(itv);
    }
  }


  validateForm(itv : any){
    if (JSON.stringify(this.itvBeforeUpdate) === JSON.stringify(itv)) {
      this.showAlert("There's nothing change !", "error");
      return false;
    }
    


    return true;
  }



  onUpdateSubmit(itv : any){
    console.log(itv);
    itv.Date = itv.Date.replace("T"," ");
    this.isProcessing = true;


    if(this.isOffering){
      itv.DeleteFlag = "Y";
      this.apiService.addOffering(itv).subscribe();
      this.apiService.updateJobApply({
        "PositionApply" : itv.Candidate.PositionApply,
        "ID" : itv.Candidate.ID,
        "Action" : "Offering"
      }).subscribe();

    }

    this.apiService.updateInterviewing(itv).subscribe(
      (res) =>{
        if (res.result === "Successful") {
          this.isProcessing = false;
          this.showAlert("Update Completed !", "success");
          this.itvGroup.getInterviewingList();
          setTimeout(function(){
            $("#editInterviewingForm").find(".close").click();
          },1500);
        }
      }
    );

  }
      

}
