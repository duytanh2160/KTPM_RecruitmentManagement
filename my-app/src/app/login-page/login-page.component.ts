import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  Account: any = {
    UserName: "",
    Password: ""
  }
  isProcessing: boolean;

  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit() {
    var user = localStorage.getItem('user');
    if(user !== null){
      this.router.navigate(['/Main']);
    }

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


  login(acc) {
    this.isProcessing = true;
    this.apiService.login(acc).subscribe(
      (res) => {
        this.isProcessing = false;
        if (res !== null) {
          localStorage.setItem('user', JSON.stringify(res));
          this.showAlert("Login successfully !", "success");
          setTimeout(() => {
            this.router.navigate(['/Main']);
          }, 1500);
        }else{
          this.showAlert("Invalid User !", "error");
        }
      },
      (err) => {
        this.isProcessing = false;
        console.error(err);
        this.showAlert("Error occurred, please check console !", "error");
      }
    );


  }

}
