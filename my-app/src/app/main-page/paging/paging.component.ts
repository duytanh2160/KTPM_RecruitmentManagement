import { Component, OnInit } from '@angular/core';


import { ApiService } from '../../api.service';
import { Candidate } from '../../candidate';


@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  Count : number;
  currentPage : number = 1;

  ngOnInit() {

    this.apiService.getPagination().subscribe((res) =>{
      var pagination = document.getElementById("pagination-contents");
      pagination.innerHTML = "";


      this.Count = res[0].Count;
      var pageNumber = this.Count/6;
      if(this.Count % 6 > 0){
        pageNumber+=1;
      }

      for(var i = 1 ; i <= pageNumber ; i++){
        pagination.innerHTML+="<a href='javascript:getCandidates(" + i +")'>"+ i +"</a>";

        if(i == this.currentPage){
            pagination.getElementsByTagName("a")[i-1].className += " active";
        }
    }



    });





  }

}
