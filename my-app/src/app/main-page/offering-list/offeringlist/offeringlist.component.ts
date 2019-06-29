import { Component, OnInit, ViewChild } from '@angular/core';
import { OfferingListGroupItemComponent } from '../offering-list-group-item/offering-list-group-item.component';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-offeringlist',
  templateUrl: './offeringlist.component.html',
  styleUrls: ['./offeringlist.component.css']
})
export class OfferinglistComponent implements OnInit {
  @ViewChild(OfferingListGroupItemComponent) offGroup : OfferingListGroupItemComponent;
  isProcessing : boolean = false;
  isProbation : boolean = false;

  JobLevelList : any[];
  offBeforeUpdate : any;
  currentOffering : any = {
    Result : "",
    CurrentSalary : "",
    ExpectSalary : "",
    OfferingSalary : "",
    LevelOffered : "",
    Candidate : {}
  };


  constructor(private apiService: ApiService) { 
    this.getJobLevelsList();
  }

  ngOnInit() {
  }



  receiveMessage($event){
    this.isProbation = false;
    console.log("Edit Form: ",$event);

    this.currentOffering = JSON.parse(JSON.stringify($event));
    this.offBeforeUpdate = JSON.parse(JSON.stringify(this.currentOffering));
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
      this.isProbation = false;
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




  onSubmit(off: any) {
    if (this.validateForm(off)) {
      this.onUpdateSubmit(off);
    }
  }


  validateForm(off : any){
    console.log(off);
  
    if(off.StartDate > off.EndDate){
      this.showAlert("Start Date must smaller than End Date", "error");
      return false;
    }


    if (JSON.stringify(this.offBeforeUpdate) === JSON.stringify(off)) {
      this.showAlert("There's nothing change !", "error");
      return false;
    }


    return true;
  }



  onUpdateSubmit(off : any){
    this.isProcessing = true;

    if(this.isProbation){
      off.DeleteFlag = "Y";
      this.apiService.addProbation(off).subscribe();
      this.apiService.updateJobApply({
        "PositionApply" : off.Candidate.PositionApply,
        "ID" : off.Candidate.ID,
        "Action" : "Probation"
      }).subscribe();

    }


    this.apiService.updateOffering(off).subscribe(
      (res) => {
        if (res.result === "Successful") {
          this.isProcessing = false;
          this.showAlert("Update Completed !", "success");
          this.offGroup.getOfferingList();
          setTimeout(function(){
            $("#editOfferingForm").find(".close").click();
          },1500);
        }



      }
    );


  }


}
