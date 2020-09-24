import { Component, OnInit } from '@angular/core';

// product model
import { MobParts } from './../../model/mob-parts';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styles: [],
})
export class MobilesComponent implements OnInit {
  title: string = 'hello';

  // int num = 10;

  constructor() {}

  ngOnInit(): void {}

  mobParts: MobParts[] = [
    {
      prodId: 1001,
      prodName: 'MOBILE SCREEN',
      prodInstock: 150,
      prodPrice: 18000,
      veg: false,
      sold: false,
      country: 'India',
    },
    {
      prodId: 1002,
      prodName: 'mobile keypad',
      prodInstock: 50,
      prodPrice: 18000,
      veg: false,
      sold: true,
      country: 'Germany',
    },
    {
      prodId: 1003,
      prodName: 'Headphones',
      prodInstock: 0,
      prodPrice: 18000,
      veg: false,
      sold: false,
      country: '',
    },
  ];

  // meth
  // params
  calcProds() {
    let sum = 0;

    for (let mobPart of this.mobParts) {
      sum += mobPart.prodInstock;
    }

    // retu
    return sum;
  }
}
