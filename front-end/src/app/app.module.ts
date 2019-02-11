import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Http client module to send http requests
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

//Angular material, toolbar property
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule,
   MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule,
    MatSnackBarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

//Issue service
import {IssueService } from './services/issue.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,     //Auto-generated routing import from app-routing.module.ts
    HttpClientModule,     //Module for creating http requests
    BrowserAnimationsModule,

    //HTML angular material libraries for formatting
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,

    //angular library for Forms
    ReactiveFormsModule
  ],
  //Relevant services
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
