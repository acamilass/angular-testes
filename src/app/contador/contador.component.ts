import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  cont = 0;

  constructor() { }

  ngOnInit() {
  }

  maisUm() {
    this.cont++;
  }

  menosUm() {
    this.cont--;
  }

}
