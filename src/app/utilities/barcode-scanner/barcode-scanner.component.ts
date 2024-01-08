import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss'],
})
export class BarcodeScannerComponent implements OnInit {

  @Output() barcodeEvent: EventEmitter<string> = new EventEmitter;
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent = new BarcodeScannerLivestreamComponent();
  barCode: string = '';

  constructor() { }

  ngOnInit() {}

  async ngAfterViewInit() {
    this.barCode = '';
    await this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    console.log(result.codeResult.code);
    this.barCode = result.codeResult.code
    this.barcodeEvent.emit(this.barCode)
  }

  onStarted(started: any) {
    console.log(started);
  }

  restart(): void {
    this.barcodeScanner.restart();
    this.barCode = '';
  }
}
