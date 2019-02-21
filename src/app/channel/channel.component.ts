import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';

import * as _ from 'underscore';
import { ChannelService } from '../common/services/channel.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  channels:any; 
  dates:any = [];
  channelSub:Subscription;

  constructor(private channelService:ChannelService) {}

  ngOnInit() {

    //get channel data using channel Service
    this.channelSub = this.channelService.getAll()     
      .subscribe(resp=>{
        //can use observabes/operators before subscribe for below task as well but this one is more suitable here
        this.channels = _.groupBy(resp, function(item:any) {
          return item.time.substring(0,10);
        });
        
        //sorting data by date & time
        this.getSortedDateArr(this.channels);
      },
      (error:any) => {      
        console.log('error resp',error);
      });
  }

  //sorted date & time And object to array to show in view
  getSortedDateArr(prm:any){
    for(let dt in prm){
      this.dates.push(dt);
      this.channels[dt].sort((a:any,b:any)=>{
          return a.time.localeCompare(b.time);
      });
    }
    this.dates.sort();
  }

  //add 1 hour in given date time
  oneHourAdded(datetime:any){
    var dt = new Date(datetime)
    dt.setHours(dt.getHours()+1);
    return dt;
  }


  ngOnDestroy(){
    //unsubscribe data 
    this.channelSub.unsubscribe();
  }

}
