import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id:number;

  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) {

      this.route.params.subscribe((params:Params) => {
        this.id = params.id;
      });
   }

  ngOnInit() {
  }

}
