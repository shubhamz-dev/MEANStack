import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
    `
      .prod {
        color: grey;
        display: inline-block;
        /* border: 1px solid; */
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        box-shadow: 1px 1px 4px orange;
      }
    `,
  ],
})
export class ProductsComponent {
  title = 'Welocome to Products view';

  mobParts = [
    {
      prodId: 1001,
      prodName: 'Mobile 1',
      prodInstock: 150,
      prodPrice: 18000,
    },
    {
      prodId: 1002,
      prodName: 'Mobile 2',
      prodInstock: 50,
      prodPrice: 18000,
    },
    {
      prodId: 1003,
      prodName: 'Mobile 3',
      prodInstock: 0,
      prodPrice: 18000,
    },
  ];
}
