import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Products } from '../../products';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  myproducts: Products[];
  constructor(private http: Http) { }

  ngOnInit() {

       // open db.json file in src folder for more details
      this.http.get('http://localhost:4201/electronics')
      .subscribe(res => this.myproducts =
      res.json() as Products[]);
  
  }

}
