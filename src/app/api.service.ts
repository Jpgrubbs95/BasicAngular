import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'; //The model I created to represent each User
import { Observable } from  'rxjs'; //This is needed because every http.get() request returns an Observable
                                    //It's an Angular thing you can read up on if you want.They are a lot like
                                    // promises but with some extra functionality. Basically they allow us to make
                                    // an asynchronous call to the webserver and get the resulting data to a component

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //This is the base url of the API we're calling. In your case it will be the IP address and port of your webserver
  WEBSERVER_URL = "https://jsonplaceholder.typicode.com"

  //This line just allows us to use httpClient in other methods in this class
  constructor(private httpClient: HttpClient) { } 

  //This is the actual method to call our server and get the results
  //NOTE: I had to restart the ng server when I added this method
  readUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.WEBSERVER_URL}/users`);
  }

  //Yours would look something like this:
  /*
  readInventory(): Observable<Inventory[]>{
    return this.httpClient.get<Inventory[]>(`${this.WEBSERVER_URL}/select`);
  }
  */

}
