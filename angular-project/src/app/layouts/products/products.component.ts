import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  // styles: [
  //   `
  //     .prod {
  //       color: grey;
  //       display: inline-block;
  //       /* border: 1px solid; */
  //       margin: 5px;
  //       padding: 5px;
  //       border-radius: 5px;
  //       box-shadow: 1px 1px 4px orange;
  //     }

  //     .soldOut {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class ProductsComponent {
  title = 'Welocome to Products view';
}
