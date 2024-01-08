import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ProductDTO} from "../../../DTOs/ProductDTO";
import {NutritionixService} from "../../../services/nutritionix.service";
import {BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";


@Component({
  selector: 'app-product-item-edit',
  templateUrl: './product-item-edit.component.html',
  styleUrls: ['./product-item-edit.component.scss'],
})
export class ProductItemEditComponent implements OnInit {

  @Input() product: ProductDTO = new ProductDTO();
  @Input() editing: boolean = false;
  @Output() createNewProduct: EventEmitter<ProductDTO> = new EventEmitter<ProductDTO>();
  @Output() editExistingProduct: EventEmitter<ProductDTO> = new EventEmitter<ProductDTO>();
  maxYearDate: string = '';
  showingIcons: boolean = false;
  scanningBarcode: boolean = false;
  icons: string[] = ['./assets/images/food.png', './assets/images/fridge.png', './assets/images/shelves.png'];

  constructor(private nutritionixService: NutritionixService) {
    this.maxYearDate = new Date(new Date().getFullYear() + 20,
      new Date().getMonth(),
      new Date().getDate()).toISOString();
  }

  ngOnInit() {
    if (!this.editing) {
      this.product = new ProductDTO();
      this.product.date = new Date().toISOString();
    } else {
      const aux = new ProductDTO();
      aux.name = this.product.name;
      aux.expirationDate = this.product.expirationDate;
      aux.date = this.product.date;
      aux.icon = this.product.icon;
      this.product = aux;
    }
  }

  createProduct(): void {
    if (this.product.notEmpty()) {
      this.createNewProduct.emit(this.product);
    }
  }

  scanBarcode(barcode: string): void {
    this.nutritionixService.getUPCScan(barcode)
      .subscribe(
        data => {
          console.log(data)
        }
      )
  }

  editProduct(): void {
    if (this.product.notEmpty()) {
      this.editExistingProduct.emit(this.product);
    }
  }

  cancel(): void {
    this.createNewProduct.emit();
  }

  changeIcon(icon: string): void {
    this.product.icon = icon;
    this.showingIcons = false;
  }
}
