import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Products } from '../../products';
@Component({
  selector: 'app-cloths',
  templateUrl: './cloths.component.html',
  styleUrls: ['./cloths.component.css']
})
export class ClothsComponent implements OnInit {

  myproducts: Products[];
  constructor(private http: Http) { }

  ngOnInit() {

    // open db.json file in src folder for more details
    this.http.get('http://localhost:4201/cloths')
    .subscribe(res => this.myproducts =
    res.json() as Products[]);
  }

}
