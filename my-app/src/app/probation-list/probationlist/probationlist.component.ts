import { Component, OnInit, ViewChild } from '@angular/core';
import { ProbationListGroupItemComponent } from '../probation-list-group-item/probation-list-group-item.component';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-probationlist',
  templateUrl: './probationlist.component.html',
  styleUrls: ['./probationlist.component.css']
})
export class ProbationlistComponent implements OnInit {
  @ViewChild(ProbationListGroupItemComponent) probGroup : ProbationListGroupItemComponent;
  isProcessing : boolean = false;

  JobLevelList : any[];
  probBeforeUpdate : any;
  currentProbation : any = {
    Result : ""
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getJobLevelsList();
  }

  receiveMessage($event){
    console.log("Edit Form: ",$event);

    this.currentProbation = JSON.parse(JSON.stringify($event));
    this.probBeforeUpdate = JSON.parse(JSON.stringify(this.currentProbation));
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
  //Get JobLevel List
  getJobLevelsList() {
    this.apiService.getJobLevels().subscribe(
      res => {
        this.JobLevelList = res;
      });
    console.log(this.JobLevelList);
  }




  onSubmit(prob : any) {
    if (this.validateForm(prob)) {
      prob = JSON.parse(JSON.stringify(prob));
      prob.Level = this.JobLevelList.filter(x => prob.Level === x.Name)[0].ID;
      console.log("On Submit: ",prob);

      this.onUpdateSubmit(prob);
    }
  }
  validateForm(prob : any){
    console.log("Validate: ",prob);
  
    if(prob.StartDate > prob.EndDate){
      this.showAlert("Start Date must smaller than End Date", "error");
      return false;
    }


    if (JSON.stringify(this.probBeforeUpdate) === JSON.stringify(prob)) {
      this.showAlert("There's nothing change !", "error");
      return false;
    }


    return true;
  }
  onUpdateSubmit(prob : any){
  this.isProcessing = true;

  this.apiService.updateProbation(prob).subscribe(
    (res) => {
      if (res.result === "Successful") {
        this.isProcessing = false;
        this.showAlert("Update Completed !", "success");
        this.probGroup.getProbationList();
        setTimeout(function(){
          $("#editProbationForm").find(".close").click();
        },1500);
      }
    }
  );

  }





}
