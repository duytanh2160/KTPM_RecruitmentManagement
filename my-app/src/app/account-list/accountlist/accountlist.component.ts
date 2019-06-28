import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {
  isProcessing : boolean;
  isAddForm : boolean;

  AccountList : any[];
  RoleList : any[];
  
  currentAccount : any = {
    FullName : "",
    UserName : "",
    Email : "",
    Role : {
      ID : "",
      Name : ""
    },
  }
  accBeforeUpdate : any;
  public search : any;


  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getRoleList();
    this.getAccountList();
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
  getAccountList(){
    this.apiService.getAccounts().subscribe(
      (res) =>{
        for(let acc of res){
          acc.Role = this.RoleList.filter(x => x.ID === acc.RoleID)[0];
        }
        this.AccountList = res;
      }
    );

  }
  getRoleList(){
    this.apiService.getRoles().subscribe(
      (res : any[]) =>{
        this.RoleList = res;
      }
    );
  }
  onOpenAddFormClick() {
    this.isAddForm = true;

    // this.currentJob = {
    //   ID : "",
    //   Name : "",
    //   HeadCount : "",
    //   DeadLine : "",
    //   Requirement : "",
    //   Description : ""
    // }
  }
  sendDataToForm(acc){
    this.isAddForm = false;
    console.log("Edit Form: ",acc);

    // this.currentJob = JSON.parse(JSON.stringify(job));
    // this.jobBeforeUpdate = JSON.parse(JSON.stringify(this.currentJob));
  }
  onSubmit(acc : any) {
    console.log("On Submit: ",acc);
    if (this.validateForm(acc)) {
      if (this.isAddForm) {
        this.onAddSubmit(acc);
      } else {
        this.onUpdateSubmit(acc);
      }
    }
  }
  validateForm(acc : any){
    if (JSON.stringify(this.accBeforeUpdate) === JSON.stringify(acc)) {
      this.showAlert("There's nothing change !", "error");
      return false;
    }


    return true;
  }
  onAddSubmit(job : any){
    this.isProcessing = true;
    this.apiService.addAccount(job).subscribe(
      (res) => {
        if (res.result === "Successful") {
          this.isProcessing = false;
          this.showAlert("Add Completed !", "success");
          this.getAccountList();
          setTimeout(function(){
            $("#editJobForm").find(".close").click();
          },1500);
        }
      }

    );

  }
  onUpdateSubmit(acc : any){
    this.isProcessing = true;
    this.apiService.updateAccount(acc).subscribe(
      (res) =>{
        if (res.result === "Successful") {
          this.isProcessing = false;
          this.showAlert("Update Completed !", "success");
          this.getAccountList();
          setTimeout(function(){
            $("#editJobForm").find(".close").click();
          },1500);
        }
      }

    );

  }

}
