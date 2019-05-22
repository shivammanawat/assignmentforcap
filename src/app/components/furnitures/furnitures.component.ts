import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Products } from '../../products';
@Component({
  selector: 'app-furnitures',
  templateUrl: './furnitures.component.html',
  styleUrls: ['./furnitures.component.css']
})
export class FurnituresComponent implements OnInit {

  myproducts: Products[];
  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get('http://localhost:4201/furnitures')
    .subscribe(res => this.myproducts =
    res.json() as Products[]);

  }

}
