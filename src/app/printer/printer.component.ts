import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {

  description = {
    name : "Mon imprimante",
    state : 'on'
  }

  isPrinterOn = true

  constructor() { }

  ngOnInit() {
  }

  public changeStatePrinter (){
    this.isPrinterOn = !this.isPrinterOn;
  }

  public getStatePrinter (){
    return this.isPrinterOn;
  }

}
