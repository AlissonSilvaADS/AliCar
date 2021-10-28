import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seda',
  templateUrl: './seda.component.html',
  styleUrls: ['./seda.component.css']
})
export class SedaComponent implements OnInit {

  sedas: any = [
    {
      tipe: 'Seda',
      pathImage: 'assets/Seda/audi-s3-2.0-tfsi-sedan-quattro-gasolina-4p-stronic-RS-235.000.jpg',
      name: 'Audi s3 2.0 tfsi sedan quattro gasolina 4p stronic',
      price: 'R$ 235.000',
    },
    {
      tipe: 'Seda',
      pathImage: 'assets/Seda/chevrolet-onix-1.0-turbo-flex-plus-lt-automatico-RS-85.800.jpg',
      name: 'Chevrolet onix 1.0 turbo flex plus lt automatico',
      price: 'R$ 85.800',
    },
    {
      tipe: 'Seda',
      pathImage: 'assets/Seda/honda-civic-2.0-16v-flexone-exl-4p-cvt-RS-102.000.jpg',
      name: 'Honda civic 2.0-16v flexone exl 4p cvt',
      price: 'R$ 102.000',
    },
    {
      tipe: 'Seda',
      pathImage: 'assets/Seda/hyundai-hb20s-1.6-comfort-plus-16v-flex-4p-automatico-RS-68.890.jpg',
      name: 'Hyundai hb20s 1.6 comfort plus 16v flex 4p automatico',
      price: 'R$ 68.890',
    },
    {
      tipe: 'Seda',
      pathImage: 'assets/Seda/jaguar-xe-2.0-16v-ingenium-p250-gasolina-rdynamic-s-4p-automatico-RS-296.900.jpg',
      name: 'Jaguar xe 2.0 16v ingenium p250 gasolina rdynamic s 4p automatico',
      price: 'R$ 296.900',
    },
    {
      tipe: 'Seda',
      pathImage: 'assets/Seda/jaguar-xj-3.0-rsport-supercharged-v6-24v-gasolina-4p-automatico-RS-275.000.jpg',
      name: 'Jaguar xj 3.0 rsport supercharged v6 24v gasolina 4p automatico',
      price: 'R$ 275.000',
    },
    {
      tipe: 'Seda',
      pathImage: 'assets/Seda/renault-logan-1.0-12v-sce-flex-authentique-manual-RS-38.999.jpg',
      name: 'Renault logan 1.0 12v sce flex authentique manual',
      price: 'R$ 38.999',
    },
    {
      tipe: 'Seda',
      pathImage: 'assets/Seda/renault-logan-1.0-12v-sce-flex-authentique-manual-RS-47.900.jpg',
      name: 'Renault logan 1.0 12v sce flex authentique manual',
      price: 'R$ 47.900',
    },
    {
      tipe: 'Seda',
      pathImage: 'assets/Seda/toyota-corolla-2.0-xei-16v-flex-4p-automatico-RS-119.800.jpg',
      name: 'Toyota corolla 2.0 xei 16v flex 4p automatico',
      price: 'R$ 119.800',
    },
    {
      tipe: 'Seda',
      pathImage: 'assets/Seda/volkswagen-jetta-2.0-tsi-highline-211cv-gasolina-4p-tiptronic-RS-69.890.jpg',
      name: 'Volkswagen jetta 2.0 tsi highline 211cv gasolina 4p tiptronic',
      price: 'R$ 69.890',
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
