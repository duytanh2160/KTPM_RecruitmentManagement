import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { Candidate } from '../../candidate';
import { NgForm } from '@angular/forms';
import { NgSelectModule, NgOption, NgSelectComponent } from '@ng-select/ng-select';
import { Job } from 'src/app/job';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-candidatelist',
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.css']
})
export class CandidatelistComponent implements OnInit {
  JobList: any[];
  JobListDetail: Job[];
  JobLevelList: any[];

  candBeforeUpdate: any;
  currentCandidate: any = {
    ID: "",
    Fullname: "",
    Sex: "",
    Skills: "",
    BirthDay: "",
    PhoneNumber: "",
    IdentifyNumber: "",
    Address: "",
    Email: "",
    Image: "",
    PositionApply: "",
    PositionApplyArray: [],
    Experience: "",
    University: "",
    Source: "",
    Level: "",
    Note: "",
    DeleteFlag: ""
  };

  isAddForm: boolean;
  isProcessing: boolean = false;
  isImageUpdate : boolean = false;

  //selectedJobIds : any;

  @ViewChild("JobSelect") JobSelect: NgSelectComponent;
  @ViewChild("f") FORM: any;




  constructor(private apiService: ApiService) {
    this.isProcessing = true;
    this.getJobList();
    this.getJobLevelsList();
    this.isProcessing = false;
  }


  ngOnInit() {
  }




  //Get JobList for Add new / Update Candidate
  getJobList() {
    this.apiService.getJobs().subscribe(
      res => {
        this.JobListDetail = res;
        var result = [];
        for (var job of res) {
          var temp = {
            id: job.ID,
            name: job.Name
          }
          result.push(temp);
        }
        this.JobList = result;
      });
    console.log(this.JobList);
  }



  //Get JobLevel List
  getJobLevelsList() {
    this.apiService.getJobLevels().subscribe(
      res => {
        this.JobLevelList = res;
      });
    console.log(this.JobLevelList);
  }



  setFormValue(field, value) {
    this.FORM.controls[field].value = value;
    $("#AddForm").find(`[name=${field}]`).val('' + value);
  }


  // Fired when click on "Add Button".
  onOpenAddFormClick() {
    console.log("ADD ", this.FORM.controls);
    this.JobSelect.disabled = false;
    this.isAddForm = true;
    //this.selectedJobIds = [];

    this.currentCandidate = {
      ID: "",
      Fullname: "",
      Sex: "",
      Skills: "",
      BirthDay: "",
      PhoneNumber: "",
      IdentifyNumber: "",
      Address: "",
      Email: "",
      Image: "",
      PositionApply: "",
      PositionApplyArray: [],
      Experience: "",
      University: "",
      Source: "",
      Level: "",
      DeleteFlag: ""
    };
    $("#wizardPicturePreview").attr("src", '../../assets/images/image-select-default.png');
  }


  // Receive data from child component (candidate-list-group-item)
  // Fired when click on "Update Button" from Candidate info tab.
  receiveMessage($event) {
    var cand = $event;
    this.isAddForm = false;
    this.currentCandidate = JSON.parse(JSON.stringify(cand));
    this.currentCandidate.BirthDay = this.currentCandidate.BirthDay.slice(0, 10);
    this.currentCandidate.Level = this.levelNameToID(this.currentCandidate.Level);
    this.currentCandidate.PositionApplyArray = this.jobNameToID(cand.PositionApply);

    this.candBeforeUpdate = JSON.parse(JSON.stringify(this.currentCandidate)); // Remember candidate info before editing it.
    $("#wizardPicturePreview").attr("src", cand.Image);
    console.log("Candidate before update: ", this.candBeforeUpdate);
  }

  levelNameToID(Level: string) {
    if (Level !== "") {
      for (var a of this.JobLevelList) {
        if (Level === a.Name) {
          return a.ID;
        }
      }
    }
  }

  jobNameToID(jobName: string) {
    var result = [];
    var temp = jobName.split(',');

    for (var a of temp) {
      for (var b of this.JobListDetail) {
        if (a == b.Name)
          result.push(b.ID);
      }
    }

    return result;
  }









  //Decide which job the Form will do base on isAddForm
  onSubmit(cand: Candidate, photo: File) {
    this.isImageUpdate = false;
    cand.Note = cand.Note.replace(/'/g, "''");

    if (this.validateAddForm(cand, photo)) {
      if (this.isAddForm) {
        this.onAddSubmit(cand, photo);
      } else {
        if(this.candBeforeUpdate.Image !== cand.Image){
          this.onUpdateSubmitImage(cand, photo);
        }else{
          this.onUpdateSubmit(cand, photo);
        }
      }
    }
  }

  //return false if any of the params are null.
  validateAddForm(cand, photo) {
    for (var temp in cand) {
      if (typeof cand[temp] === 'undefined') {
        this.showAlert("Missing some Candidate field !", "error");
        return false;
      }
    }

    if (cand.PositionApplyArray.length <= 0) {
      this.showAlert("Please insert Candidate Job !", "error");
      return false;
    }


    if (typeof photo === 'undefined') {
      if (this.isAddForm) {
        this.showAlert("Please select Candidate avatar !", "error");
        return false;
      }
    }

    if (!this.isAddForm) {
      if (this.candBeforeUpdate.DeleteFlag !== cand.DeleteFlag) {
        //return false;
      }

      if (JSON.stringify(this.candBeforeUpdate) === JSON.stringify(cand)) {
        this.showAlert("There's nothing change !", "error");
        return false;
      }
    }



    return true;
  }





  // - Add Candidate
  /* Process when Add a new Candidate:
   * 1. Validate if form has null values.
   * 2. Upload candidate Avatar to Server.
   * 3. Add Candidate to database.
   * 4. Add Job Apply for candidate.
  **/

  //Use for get Files.
  files: any[];
  onFileChangeEvent(event) {
    this.files = event.target.files[0];
    console.log(this.files);
  }


  onAddSubmit(cand: Candidate, photo: File) {
    this.isProcessing = true;
    //cand.PositionApplyArray = ID;
    let file = new FormData();
    file.append('photo', photo);

    this.apiService.uploadAvatarImage(file).subscribe(
      (res) => {
        cand.Image = res.path;

        this.apiService.addCandidate(cand).subscribe(
          (res) => {
            this.apiService.addJobApply({ "CandidateID": res.ID, "JobID": cand.PositionApplyArray }).subscribe(
              (res) => {
                if (res.result === "Successful") {
                  this.isProcessing = false;
                  this.showAlert("Add Completed !", "success");
                  setTimeout(function () {
                    window.location.replace('');
                  }, 2000);
                }
              });
          });

      }, (err) => {
        console.log(err)
        this.isProcessing = false;
        this.showAlert("Error a: " + err, "error");
      });
  }

  //===============End Add Process====================


  // - Update Candidate
  /* Process when Update a new Candidate:
   * 1. Validate if form has null values.
   * 2. If Has Image Update => goto onUpdateSubmitImage / else goto onUpdateSubmit
   * 3. Update Canidate information 
   * 4. Check if PositionApply is changed
   *    4.1. If changed => Delete old, then Add new PositionApply
   *    4.2. Else return Success.
  **/

  onUpdateSubmit(cand: Candidate, photo: File) {
    let file = new FormData();
    file.append('photo', photo);
    this.isProcessing = true;

    this.apiService.updateCandidate(cand).subscribe(
      (res) => {
        if (JSON.stringify(this.candBeforeUpdate.PositionApplyArray.sort()) !== JSON.stringify(cand.PositionApplyArray.sort())) {
          this.apiService.deleteAllJobApply(cand).subscribe(
            (res) => {

              this.apiService.addJobApply({ "CandidateID": cand.ID, "JobID": cand.PositionApplyArray }).subscribe(
                (res) => {
                  if (res.result === "Successful") {
                    this.isProcessing = false;
                    this.showAlert("Update Completed !", "success");
                    setTimeout(function () {
                      window.location.replace('');
                    }, 2000);
                  }
                });
            }
          );
        } else {
          if (res.result === "Successful") {
            this.isProcessing = false;
            this.showAlert("Update Completed !", "success");
            setTimeout(function () {
              window.location.replace('');
            }, 2000);
          }
        }



      }, (err) => {
        this.isProcessing = false;
        this.showAlert("Error: " + err.error.text, "error");
      });
  }

  onUpdateSubmitImage(cand: Candidate, photo: File) {
    let file = new FormData();
    file.append('photo', photo);
    this.isProcessing = true;

    this.apiService.uploadAvatarImage(file).subscribe(
      (res) => {
        cand.Image = res.path;
        this.onUpdateSubmit(cand, photo);
      }
    );
  }


  //===============End Update Process==================



  showAlert(text, type) {
    if (type === "success") {
      Swal.fire({
        position: 'center',
        type: 'success',
        title: text,
        showConfirmButton: false,
        timer: 1500
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

}
