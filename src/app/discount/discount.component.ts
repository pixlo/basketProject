import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
    discount: number;
    @Output() makeDiscount: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(): void {
      this.makeDiscount.emit(this.discount);
  }

}
