import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Http client module to send http requests
import { HttpClientModule } from '@angular/common/http';

//Angular material, toolbar property
import { MatToolbarModule } from '@angular/material';

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
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
