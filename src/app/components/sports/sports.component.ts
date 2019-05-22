import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Products } from '../../products';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  myproducts: Products[];
  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get('http://localhost:4201/sports')
    .subscribe(res => this.myproducts =
    res.json() as Products[]);

  }

}
