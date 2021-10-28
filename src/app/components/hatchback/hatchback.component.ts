import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hatchback',
  templateUrl: './hatchback.component.html',
  styleUrls: ['./hatchback.component.css']
})
export class HatchbackComponent implements OnInit {

  hatchbacks: any =
    [
      {
        tipe: 'Hatchback',
        pathImage: 'assets/Hatchback/chevrolet-onix-1.0-mpfi-joy-8v-flex-4p-manual-RS-35.900.jpg',
        name: 'Chevrolet onix 1.0 mpfi joy 8v flex 4p manual',
        price: 'R$ 35.900',
      },
      {
        tipe: 'Hatchback',
        pathImage: 'assets/Hatchback/chevrolet-onix-1.0-mpfi-joy-8v-flex-4p-manual-RS-44.900.jpg',
        name: 'Chevrolet onix 1.0 mpfi joy 8v flex 4p manual',
        price: 'R$ 44.900',
      },
      {
        tipe: 'Hatchback',
        pathImage: 'assets/Hatchback/chevrolet-onix-1.4-mpfi-ltz-8v-flex-4p-automatico-RS-58.900.jpg',
        name: 'Chevrolet onix 1.4 mpfi ltz 8v flex 4p automatico',
        price: 'R$ 58.900',
      },
      {
        tipe: 'Hatchback',
        pathImage: 'assets/Hatchback/fiat-punto-1.8-hlx-8v-flex-4p-manual-RS-28.900.jpg',
        name: 'Fiat punto 1.8 hlx 8v flex 4p manual',
        price: 'R$ 28.900',
      },
      {
        tipe: 'Hatchback',
        pathImage: 'assets/Hatchback/ford-ka-1.0-tivct-flex-se-manual-RS-45.900.jpg',
        name: 'Ford ka 1.0 tivct flex se manual',
        price: 'R$ 45.900',
      },
      {
        tipe: 'Hatchback',
        pathImage: 'assets/Hatchback/ford-ka-1.0-tivct-flex-se-manual-RS-45.990.jpg',
        name: 'Ford ka 1.0 tivct flex se manual',
        price: 'R$ 45.990',
      },
      {
        tipe: 'Hatchback',
        pathImage: 'assets/Hatchback/ford-ka-1.0-tivct-flex-se-manual-RS-47.900.jpg',
        name: 'Ford ka 1.0 tivct flex se manual',
        price: 'R$ 47.900',
      },
      {
        tipe: 'Hatchback',
        pathImage: 'assets/Hatchback/renault-kwid-1.0-12v-sce-flex-zen-manual-RS-44.490.jpg',
        name: 'Renault kwid 1.0 12v sce flex zen manual',
        price: 'R$ 44.490',
      },
      {
        tipe: 'Hatchback',
        pathImage: 'assets/Hatchback/renault-kwid-1.0-12v-sce-flex-zen-manual-RS-44.900.jpg',
        name: 'Renault kwid 1.0 12v sce flex zen manual',
        price: 'R$ 44.900',
      },
      {
        tipe: 'Hatchback',
        pathImage: 'assets/Hatchback/renault-sandero-1.6-16v-sce-flex-stepway-expression-manual-RS-54.900.jpg',
        name: 'Renault sandero 1.6 16v sce flex stepway expression manual',
        price: 'R$ 54.900',
      },

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
