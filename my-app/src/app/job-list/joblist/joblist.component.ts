import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  isProcessing : boolean;
  JobList : any[];
  isAddForm : boolean;
  currentJob : any = {
    ID : "",
    Name : "",
    HeadCount : "",
    DeadLine : "",
    Requirement : "",
    Description : ""
  };
  jobBeforeUpdate : any;
  public search : any;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getJobList();
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


    // Fired when click on "Add Button".
    onOpenAddFormClick() {
      this.isAddForm = true;

      this.currentJob = {
        ID : "",
        Name : "",
        HeadCount : "",
        DeadLine : "",
        Requirement : "",
        Description : ""
      }
    }
  

  sendDataToForm(job){
    this.isAddForm = false;
    console.log("Edit Form: ",job);

    this.currentJob = JSON.parse(JSON.stringify(job));
    this.jobBeforeUpdate = JSON.parse(JSON.stringify(this.currentJob));
  }


  //Decide which job the Form will do base on isAddForm
  onSubmit(job : any) {
    console.log("On Submit: ",job);
    if (this.validateForm(job)) {
      if (this.isAddForm) {
        this.onAddSubmit(job);
      } else {
        this.onUpdateSubmit(job);
      }
    }
  }

  onAddSubmit(job : any){
    this.isProcessing = true;
    this.apiService.addJob(job).subscribe(
      (res) => {
        if (res.result === "Successful") {
          this.isProcessing = false;
          this.showAlert("Add Completed !", "success");
          this.getJobList();
          setTimeout(function(){
            $("#editJobForm").find(".close").click();
          },1500);
        }
      }

    );

  }
  onUpdateSubmit(job : any){
    this.isProcessing = true;
    this.apiService.updateJob(job).subscribe(
      (res) =>{
        if (res.result === "Successful") {
          this.isProcessing = false;
          this.showAlert("Update Completed !", "success");
          this.getJobList();
          setTimeout(function(){
            $("#editJobForm").find(".close").click();
          },1500);
        }
      }

    );

  }

  validateForm(job : any){
    if (JSON.stringify(this.jobBeforeUpdate) === JSON.stringify(job)) {
      this.showAlert("There's nothing change !", "error");
      return false;
    }


    return true;
  }

  getJobList() {
    this.apiService.getJobs().subscribe(
      res => {
        for(let job of res){
          job.DeadLine = job.DeadLine.substr(0,10);
        }

        this.JobList = res;
      });
  }




}
