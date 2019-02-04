import { Component } from "@angular/core";
import { HttpService } from '../../services/httpservice.service';

@Component({
  selector: "app-sandbox",
  templateUrl: "./sandbox.component.html",
  styleUrls: ["./sandbox.component.css"]
})

export class SandboxComponent {
  users:any;
  user = {
    id: '',
    name:'',
    email: '',
    phone: ''
  }

  isEdit:boolean = false;

  onSubmit(isEdit) {
    if (isEdit) {
      this.dataService.updateUser(this.user).subscribe(user => {
        console.log(user);
        this.users.unshift(user);
        this.isEdit = false;
      });
    } else {
      this.dataService.addUser(this.user).subscribe(user => {
        console.log(user);
        this.users.unshift(user);
      }); 
    }
    this.user = {
      id: '',
      name: '',
      email: '',
      phone: ''
    }
  }

  onDeleteClick(id) {
    this.dataService.deleteUser(id).subscribe(res => {
      console.log(res);
      for(let i=0; i < this.users.length; i++) {
        if(this.users[i].id == id) {
          this.users.splice(i, 1);
        }
      }      
    });
  }

  onEditClick(user) {
    this.isEdit = true;
    this.user = user;
  }
  
  constructor(public dataService:HttpService) {
      dataService.getUsers().subscribe(users => {
        this.users = users;
        console.log(users);
      });
  }
}
