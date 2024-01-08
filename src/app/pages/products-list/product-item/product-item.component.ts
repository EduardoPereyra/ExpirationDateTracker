import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductDTO} from "../../../DTOs/ProductDTO";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() product: ProductDTO = new ProductDTO();
  expired: boolean = false;
  @Output() deleteEmitter: EventEmitter<ProductDTO> = new EventEmitter<ProductDTO>()
  @Output() editEmitter: EventEmitter<ProductDTO> = new EventEmitter<ProductDTO>()

  constructor() { }

  ngOnInit() {
    if (this.product.expirationDate &&
      new Date(this.product.date) < new Date()) {
      this.expired = true;
    }
  }

  delete() {
    this.deleteEmitter.emit(this.product);
  }

  edit() {
    this.editEmitter.emit(this.product);
  }
}
