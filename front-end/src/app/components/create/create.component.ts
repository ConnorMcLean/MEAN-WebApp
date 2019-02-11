import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //form variable for addissue issue model
  createForm : FormGroup;

  constructor(private issueService: IssueService, private router: Router,
     private fb: FormBuilder) {

       //build form with specific form indicated in html
       this.createForm = this.fb.group({
         title: ['', Validators.required],  //indicates that field must be filled
         responsible: [''],
         decription: [''],
         severity: ['']
       });

     }

  //add issue to db, using issue service
  // subscribe indicates that the actions within it occur after initial functions
  //initial funciton is an observable, therefore inside is a listener.
  //in this case, after addIssue action occure navigate to new url specified
  //in router array in app-router.module.ts

  addIssue(title, responsible, description, severity){
    this.issueService.addIssue(title, responsible, description, severity)
    .subscribe(

        () => {this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
