/**
 *  Reusable Standard Data Service
 */

 import { HttpClient } from "@angular/common/http";

export class DataService{
    constructor(private url:string, private http: HttpClient){}

    getAll(){
        return this.http.get<any>(this.url);
    }

    /* Other api stuffs 
    get(id){
        //...
    }

    create(resource){
        //...
    }

    update(resource){
        //...
    }

    delete(id){
        //...
    }*/

    /**
     *  common handle error goes here as well....
     *  but here it's not covered
     */
    
}