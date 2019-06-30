import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';
import {Md5} from 'ts-md5/dist/md5'

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})


export class AccountlistComponent implements OnInit {
  isProcessing : boolean;
  isAddForm : boolean;
  changePassword : boolean;

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


  constructor(private apiService : ApiService) {
    this.getRoleList();
  }

  ngOnInit() { }
  doubleMd5Hash(text : string){
    text = text.toLowerCase();
    return Md5.hashStr('' + Md5.hashStr(text));
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
        this.getAccountList();
      }
    );
  }
  onOpenAddFormClick() {
    this.changePassword = true;
    this.isAddForm = true;

    this.currentAccount = {
      FullName : "",
      UserName : "",
      Email : "",
      Role : {
        ID : "",
        Name : ""
      },
    }
  }
  sendDataToForm(acc){
    this.changePassword = false;
    this.isAddForm = false;
    console.log("Edit Form: ",acc);

    this.currentAccount = JSON.parse(JSON.stringify(acc));
    this.accBeforeUpdate = JSON.parse(JSON.stringify(this.currentAccount));
  }
  onSubmit(acc : any) {
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

    if(this.changePassword){
      if(acc.NewPass !== acc.RetypePass){
        this.showAlert("Passwords are not the same !", "error");
        return false;
      }else{
        acc.Password = acc.NewPass;
      }
    }

    if (this.isAddForm) {
      if (JSON.stringify(this.AccountList.filter(x => x.UserName === acc.UserName)) !== "[]"){
        this.showAlert("Username already existed !", "error");
        return false;
      }
    }


    return true;
  }
  onAddSubmit(acc : any){
    this.isProcessing = true;
    acc.RoleID = acc.Role.ID;
    acc.Password = this.doubleMd5Hash(acc.Password);
    console.log("On Add: ",acc);
    this.apiService.addAccount(acc).subscribe(
      (res) => {
        if (res.result === "Successful") {
          this.isProcessing = false;
          this.showAlert("Add Completed !", "success");
          this.getAccountList();
          setTimeout(function(){
            $("#editAccountForm").find(".close").click();
          },1500);
        }
      }

    );

  }
  onUpdateSubmit(acc : any){
    this.isProcessing = true;
    acc.RoleID = acc.Role.ID;
    acc.Password = this.doubleMd5Hash(acc.Password);
    console.log("On Update: ",acc);

    this.apiService.updateAccount(acc).subscribe(
      (res) =>{
        if (res.result === "Successful") {
          this.isProcessing = false;
          this.showAlert("Update Completed !", "success");
          this.getAccountList();
          setTimeout(function(){
            $("#editAccountForm").find(".close").click();
          },1500);
        }
      }

    );

  }

}
