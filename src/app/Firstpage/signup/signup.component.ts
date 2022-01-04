import { Component, OnInit } from '@angular/core';
import { Api1Service } from '../shared/api1.service'; 
import { List } from '../listlogin.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  list: List =new List();
  constructor(private api:Api1Service) { }

  ngOnInit(): void {
  }
  signup(){
    this.api.postdata(this.list)
    .subscribe(res=>{
      alert("You have been sucessfully Registered");
    },err=>{
      alert("Something went wrong");
    })
  }

}
