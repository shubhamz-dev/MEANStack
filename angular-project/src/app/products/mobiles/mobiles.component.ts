import { Component, OnInit } from '@angular/core';

// product model
import { MobParts } from './../../model/mob-parts';
import { MOBPARTS } from './../../data/mock';

// mock / API -> Val-> logic | pipe | modi
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styles: [],
})
export class MobilesComponent implements OnInit {
  title: string = 'hello';

  // int num = 10;

  constructor() {}

  // 8 lifecycle hooks
  ngOnInit(): void {
    this.mobParts = MOBPARTS; // 100mb
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mobParts = []; // 0mb
  }

  mobParts: MobParts[];

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

// class MobParts {
//   prodId: number;
//   prodName: string;
//   prodInstock: number;
//   prodPrice: number;
//   veg: boolean;
//   sold: boolean;
//   country: string;
// }
