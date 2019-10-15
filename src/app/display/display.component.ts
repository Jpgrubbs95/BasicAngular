import { Component, OnInit } from '@angular/core';
//Import ApiService so we can get our data we want to display
import { ApiService } from '../api.service';
//Import our model
import { User } from '../user'; 

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  //Our array of data. Empty until we get a response from the service
  users: User[];

  //Again, constructor injection just lets us use an instance of it in any methods below
  constructor(private apiService: ApiService) { }

  //This method will be called as soon as the component is initialized
  ngOnInit() {
    //Call the service to get the users data
    this.apiService.readUsers().subscribe((users: User[])=>{
      this.users = users; //Set our data array to the users we got back from the http.get call
      console.log(this.users);
    })
  }

}
