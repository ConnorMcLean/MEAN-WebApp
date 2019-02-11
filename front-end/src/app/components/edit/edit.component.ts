import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { Issue } from '../../models/issue.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue : any = {};
  updateForm: FormGroup;


  constructor(private issueService: IssueService, private router: Router,
     private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar,
     private fb: FormBuilder) {
       this.createForm();
     }

  createForm(){
      this.updateForm = this.fb.group({
        title: ['', Validators.required],
        responsible: [''],
        description: [''],
        severity: [''],
        status:['']
      });
  }

  // On initiliasation fill update form with old values to be edited
  ngOnInit(){
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe((res) => {

        console.log('Issue by id fround at' + this.id);

        this.issue = res;

        this.updateForm.get('title').setValue(this.issue.title);
        this.updateForm.get('responsible').setValue(this.issue.responsible);
        this.updateForm.get('description').setValue(this.issue.description);
        this.updateForm.get('severity').setValue(this.issue.severity);
        this.updateForm.get('status').setValue(this.issue.status);
      });
    });
  }

  //on successful update issue show snackbar notification at bottom of screen
  updateIssue(title, responsible, description, severity, status){
    this.issueService.updateIssue(this.id, title, responsible, description, severity, status)
    .subscribe(() => {
      this.snackBar.open('Issue updated sucessfully', 'OK', {
        duration: 3000,
      });
    });
  }

}
