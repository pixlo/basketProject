import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../public/product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    @Output() addProduct: EventEmitter<Product> = new EventEmitter();
    name: string;
    price: number;
  constructor() {}
  ngOnInit() {}
  onSubmit(): void {
      const product: Product = new Product(this.name, this.price);
      this.addProduct.emit(product);
  }

}
