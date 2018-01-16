/**
 * Copyright 2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './home.component';
import { AdvisorComponent}  from './advisor/advisor.component';
import { AdvisorService }   from './advisor/advisor.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'advisor', component: AdvisorComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvisorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AdvisorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
