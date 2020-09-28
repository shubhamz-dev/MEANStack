import { Component, OnInit } from '@angular/core';

// product model
import { MobParts } from './../../model/mob-parts';
import { MOBPARTS } from './../../data/mock';

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

  mobParts: MobParts[] = MOBPARTS;

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
