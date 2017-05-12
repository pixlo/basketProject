import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../public/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input () data: Array<Product>;
  constructor() { }

  ngOnInit() {
  }

}
