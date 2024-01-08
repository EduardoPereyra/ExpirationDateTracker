import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProductsListPageRoutingModule} from './products-list-routing.module';

import {ProductsListPage} from './products-list.page';
import {HeaderComponent} from "../../layout/header/header.component";
import {ProductItemComponent} from "./product-item/product-item.component";
import {ProductItemEditComponent} from "./product-item-edit/product-item-edit.component";
import {BarcodeScannerLivestreamModule} from "ngx-barcode-scanner";
import {BarcodeScannerComponent} from "../../utilities/barcode-scanner/barcode-scanner.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsListPageRoutingModule,
    BarcodeScannerLivestreamModule
  ],
  declarations: [ProductsListPage,
    HeaderComponent,
    ProductItemComponent,
    ProductItemEditComponent, BarcodeScannerComponent]
})
export class ProductsListPageModule {
}
