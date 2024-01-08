import {Component} from '@angular/core';
import {ProductDTO} from "../../DTOs/ProductDTO";
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
  animations: [
    trigger('productList', [
      transition('* <=> *', [
        query(':leave', stagger('50ms', [
          animate('200ms ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class ProductsListPage {

  productList: ProductDTO[] = [];
  newProduct: ProductDTO = new ProductDTO();
  creatingProduct: boolean = false;
  editing: boolean = false;
  editingIndex: number = -1;

  constructor() {
  }

  ionViewWillEnter(): void {
    this.productList = [];
    if (localStorage.getItem('products') !== null &&
      localStorage.getItem('products') !== '[]') {
      this.loadProductsFromMemory();
    } else {
      this.productList = [];
      this.creatingProduct = true;
    }
  }

  createProduct($event: ProductDTO): void {
    this.editing = false;
    if ($event) {
      this.productList.push($event);
      this.saveProductsOnMemory();
      this.productList = [];
      this.loadProductsFromMemory();
    } else {
      this.productList = [];
      this.loadProductsFromMemory();
    }
    this.creatingProduct = false;
  }

  deleteProduct($event: ProductDTO, index: number): void {
    this.productList.splice(index, 1);
    this.saveProductsOnMemory();
  }

  editProduct($event: ProductDTO, index: number): void {
    this.newProduct = Object.assign({}, $event);
    this.creatingProduct = true;
    this.editing = true;
    this.editingIndex = index;
  }

  saveProduct($event: ProductDTO): void {
    this.productList[this.editingIndex] = $event;
    this.editingIndex = -1;
    this.creatingProduct = false;
    this.editing = false;
    this.saveProductsOnMemory();
  }

  saveProductsOnMemory(): void {
    localStorage.setItem('products', JSON.stringify(this.productList));
  }

  loadProductsFromMemory(): void {
    const productsJson = JSON.parse(localStorage.getItem('products') || '');
    productsJson.forEach((product: any, index: number) => {
      setTimeout(() => {
        const aux = new ProductDTO();
        aux.name = product.name;
        aux.expirationDate = product.expirationDate;
        aux.date = product.date;
        aux.icon = product.icon;
        this.productList.push(aux);
      }, index * 65 )
    })
  }

}
