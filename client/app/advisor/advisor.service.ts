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
import { Injectable }    from '@angular/core';
import { Headers, Http,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class AdvisorService {
  private convUrl ='/api/advisor/';

  constructor(private http: Http) {
  };

  submitMessage(msg:string,ctx:any): Observable<any>{
    let bodyString = JSON.stringify(  { text:msg,context:ctx });

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers })
    return this.http.post(this.convUrl,bodyString,options)
         .map((res:Response) => res.json())
  }
}
