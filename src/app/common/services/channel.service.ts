import { Injectable } from '@angular/core';
//import { DataService } from './data.service';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import { Channel } from '../models/channel.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root' 
})
export class ChannelService {

  private url : string;

  constructor(private http:HttpClient) {
    //can use data service here to refacoting the code and to make more re-usable
    //super(environment.baseUrl+'/api/channel',http);

    this.url = environment.baseUrl+'/api/channel';
  }

  getAll(){
    /**
     * Here can access direct chanel data with providing full json file path also
     * But to make it standard API, used like this 
     */
    return this.http.get<any>(this.url)
    .pipe(
      map(resp=><Channel[]>resp.data),
      catchError((error: HttpErrorResponse) => {
        return observableThrowError(error.error.message);
      })      
    )
  }

}
