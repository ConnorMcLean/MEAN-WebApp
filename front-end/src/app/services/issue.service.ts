import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  uri = 'http://localhost:4000';

  constructor(private client: HttpClient) { }

  getIssues() {
    // console.log('GetIssues func')
    return this.client.get(this.uri + '/issues');
  }

  getIssueById(id){
    return this.client.get(this.uri +  '/issues/${id}');
  }

  addIssue(title, responsible, description, severity){
      const issue = {
        title: title,
        responsible: responsible,
        description: description,
        severity: severity
      };
      return this.client.post(this.uri + '/issues/add', issue);
  }

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

  deleteIssue(id){
    return this.client.get(this.uri + '/issues/delete/' + id);
  }

}
