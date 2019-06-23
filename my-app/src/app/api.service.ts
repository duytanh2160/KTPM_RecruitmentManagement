import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidate } from './candidate';
import { Observable } from 'rxjs';
import { UploadEntity } from './upload-entity';
import { Job } from './job';
import { CandidatelistComponent } from './candidate-list/candidatelist/candidatelist.component';

// Tutorial from: https://www.techiediaries.com/angular-httpclient/


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL : string = window.location.origin + ":8000";

  constructor(private httpClient : HttpClient) { 

  }


  //Get Candidate list
  //@params: page,offset
  //@return: Candidate[]
  public getCandidates(page : string,offset : string){
    if(null == page){
      page = "";
    }
    if(null == offset){
      offset = "";
    }
    return this.httpClient.get<Candidate[]>(`${this.apiURL}/candidates?page=${page}&offset=${offset}`);
  }



  public searchCandidates(searchStr : string,searchCol : string){
    return this.httpClient.get<Candidate[]>(`${this.apiURL}/candidates/search?searchStr=${searchStr}&searchCol=${searchCol}`);
  }


  public getPagination(){
    return this.httpClient.get<number>(`${this.apiURL}/candidates/count`);
  }


  public addCandidate(cand : Candidate): Observable<any>{
    return this.httpClient.post<any>(`${this.apiURL}/candidates/add`, cand);
  }
  public updateCandidate(cand : Candidate): Observable<any>{
    return this.httpClient.post<any>(`${this.apiURL}/candidates/update`, cand);
  }


  public getPositionApply(ID : any){
    return this.httpClient.get<any>(`${this.apiURL}/candidates/apply?ID=${ID}`);
  }
  public getAction(ID : string){
    return this.httpClient.get<any>(`${this.apiURL}/candidates/action?ID=${ID}`);
  }

  //headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
  public uploadAvatarImage(file : FormData) : Observable<UploadEntity>{
    return this.httpClient.post<UploadEntity>(`${this.apiURL}/upload`,file);
  }

  public getJobs(){
    return this.httpClient.get<Job[]>(`${this.apiURL}/jobs`);
  }
  public getJobLevels(){
    return this.httpClient.get<any>(`${this.apiURL}/levels`);
  }


  public addJobApply(cand : any) : Observable<any>{
    return this.httpClient.post<any>(`${this.apiURL}/jobs/apply/add`,cand);
  }
  public updateJobApply(cand : any) : Observable<any>{
    return this.httpClient.post<any>(`${this.apiURL}/jobs/apply/update`,cand);
  }
  public deleteAllJobApply(cand : any) : Observable<any>{
    return this.httpClient.post<any>(`${this.apiURL}/jobs/apply/deleteall`,cand);
  }

  public getInterviewings(){
    return this.httpClient.get<any>(`${this.apiURL}/interviewings`);
  }
  public addInterviewing(obj : any) : Observable<any>{
    return this.httpClient.post<any>(`${this.apiURL}/interviewings/add`,obj);
  }
  public updateInterviewing(obj : any) : Observable<any>{
    return this.httpClient.post<any>(`${this.apiURL}/interviewings/update`,obj);
  }


  public getOfferrings(){
    return this.httpClient.get<any>(`${this.apiURL}/offerings`);
  }
  public addOffering(obj : any) : Observable<any>{
    return this.httpClient.post<any>(`${this.apiURL}/offerings/add`,obj);
  }
  public updateOffering(obj : any) : Observable<any>{
    return this.httpClient.post<any>(`${this.apiURL}/offerings/update`,obj);
  }


  public addProbation(obj : any) : Observable<any>{
    return this.httpClient.post<any>(`${this.apiURL}/probations/add`,obj);
  }


  
}
