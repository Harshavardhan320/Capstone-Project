import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

  message!:any;
  userdata = new Map<string, string>();
  admindata = new Map<string, string>();
  constructor(private http: HttpClient, private rout:Router) {

    this.http.get("http://localhost:8080/users").subscribe((data)=>
    {
      if (Array.isArray(data)) {
        for (let key in data) {
          let obj = data[key];
          this.userdata.set(obj.username,obj.password);
        }
      }
    });

    let adminurl = "http://localhost:8080/admin";
    this.http.get(adminurl).subscribe((data)=>{
      if (Array.isArray(data)) {
        for (let key in data) {
          let obj = data[key];
          this.admindata.set(obj.username,obj.password);
        }
      }
    });
  }

  submit(formdata:any) {
    let username = formdata.value["userid"];
    let password = formdata.value["password"];
    let select = formdata.value["rol"];

    if (username !== null && password !== null && select !== null){
      switch(select){
      
        case "admin":
          if(this.userdata.get(username)==password){
            this.rout.navigate(['/adminmainpage']);
          }else{
            this.message="Invalid incorrecta";
          }
        break;

        case "citizen":
          if(this.userdata.get(username)==password){
            this.rout.navigate(['/aadhercardpage']);
          }else{
            this.message="Invalid incorrecta";
          }
        break;

        default:
          this.message="Invalid option selected";
        break;
      }
    }
  }
}
