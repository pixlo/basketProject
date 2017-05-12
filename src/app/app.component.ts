import { Component, Output } from '@angular/core';
import data from '../public/data';
import { Product } from '../public/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() data: Array<Product> = data;
  discount = 0;
  constructor() {}
    addProduct(product: Product) {
        this.data.push(product);
        if (this.discount > 0) {
            this.calcDiscountPrice();
        }
    }
    updateDiscount(discount: number) {
      this.discount = discount;
      this.calcDiscountPrice();
    }
    calcDiscountPrice() {
      const data = this.data;
      const discount: number = this.discount;
      const quantity: number = this.data.length;
      const prices: Array<number> = [];
      let sum = 0;
      let biggestPrice = 0;
      data.forEach(item => {
          sum += item.price;
          prices.push(item.price);
          if (item.price > biggestPrice) {
              biggestPrice = item.price;
          }
      });
      const percents = prices.map(value => {
          const newValue = (100 / sum * value / 100).toFixed(1);
          return parseFloat(newValue);
      });
      let discountedSum = 0;
      const discountedPrices = prices.map((value, index) => {
          const percent: number = percents[index];
          const newValue = Math.round(value - discount * percent);
          discountedSum += newValue;
          return newValue;
      });
      this.data.forEach((item, index) => {
          item.discount = discountedPrices[index] > 0 ? discountedPrices[index] : 0;
      });
    }
}
