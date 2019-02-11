import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  //URI of mongo database
  uri = 'http://localhost:4000';

  //instantiate http request client in constructor
  constructor(private client: HttpClient) { }

  //all service functions below use the http client to send get/post requests

  //get all issues
  getIssues() {
    return this.client.get(this.uri + '/issues');
  }

  //get specific issue via id
  getIssueById(id){
    return this.client.get(this.uri +  '/issues/' + id);
  }

  //add issue to db via new issue object
  addIssue(title, responsible, description, severity){
      const issue = {
        title: title,
        responsible: responsible,
        description: description,
        severity: severity
      };
      return this.client.post(this.uri + '/issues/add', issue);
  }

  //update issue by id
  updateIssue(id, title, responsible, description, severity, status){
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
      return this.client.post(this.uri + '/issues/update/' + id, issue);
  }

  //delete issue by id
  deleteIssue(id){
    return this.client.get(this.uri + '/issues/delete/' + id);
  }

}
