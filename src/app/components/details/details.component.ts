import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';
import { Products } from '../../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myproducts: any;
  id: any;
  type:any;

  constructor(route: ActivatedRoute,private http: Http) {
    this.id = route.snapshot.params.id;
    this.type = route.snapshot.params.type;
    
   }

  ngOnInit() {
    console.log(this.id);
    console.log(this.type);
    this.http.get('http://localhost:4201/'+this.type+"/"+this.id)
    .subscribe(res => this.myproducts =
    res.json());
    
  }

 

}
