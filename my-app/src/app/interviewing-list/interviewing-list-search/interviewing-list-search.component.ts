import { Component, OnInit, Input, EventEmitter, Output , ViewChild} from '@angular/core';
import { Search } from '../../search';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-interviewing-list-search',
  templateUrl: './interviewing-list-search.component.html',
  styleUrls: ['./interviewing-list-search.component.css']
})
export class InterviewingListSearchComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<Search>();

  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }





  //Passing data to parent (candidate-list-group-item)
  onSearchSubmit(search : Search) : void { 
    this.messageEvent.emit(search);
  }
}
