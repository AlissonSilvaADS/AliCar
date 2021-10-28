import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minivan',
  templateUrl: './minivan.component.html',
  styleUrls: ['./minivan.component.css']
})
export class MinivanComponent implements OnInit {

  minivans: any = [
    {
      tipe: 'Minivan',
      pathImage: 'assets/Minivan/chevrolet-spin-1.8-advantage-8v-flex-4p-manual-RS-44.900.jpg',
      name: 'Chevrolet spin 1.8 advantage 8v flex 4p manual',
      price: 'R$ 44.900',
    },
    {
      tipe: 'Minivan',
      pathImage: 'assets/Minivan/chevrolet-spin-1.8-lt-8v-flex-4p-automatico-RS-42.900.jpg',
      name: 'Chevrolet spin 1.8 lt 8v flex 4p automatico',
      price: 'R$ 42.900',
    },
    {
      tipe: 'Minivan',
      pathImage: 'assets/Minivan/chevrolet-spin-1.8-ltz-8v-flex-4p-automatico-RS-48.000.jpg',
      name: 'Chevrolet spin 1.8 ltz 8v flex 4p automatico',
      price: 'R$ 48.000',
    },
    {
      tipe: 'Minivan',
      pathImage: 'assets/Minivan/chevrolet-spin-1.8-ltz-8v-flex-4p-automatico-RS-55.990.jpg',
      name: 'Chevrolet spin 1.8 ltz 8v flex 4p automatico',
      price: 'R$ 55.990',
    },
    {
      tipe: 'Minivan',
      pathImage: 'assets/Minivan/chevrolet-spin-1.8-ltz-8v-flex-4p-automatico-RS-87.999.jpg',
      name: 'Chevrolet spin 1.8 ltz 8v flex 4p automatico',
      price: 'R$ 87.999',
    },
    {
      tipe: 'Minivan',
      pathImage: 'assets/Minivan/chrysler-town-country-3.8-limited-v6-12v-gasolina-4p-automatico-RS-64.990.jpg',
      name: 'Chrysler town country 3.8 limited v6 12v gasolina 4p automatico',
      price: 'R$ 64.990',
    },
    {
      tipe: 'Minivan',
      pathImage: 'assets/Minivan/fiat-doblo-1.8-mpi-essence-7l-16v-flex-4p-manual-RS-76.900.jpg',
      name: 'Fiat doblo 1.8 mpi essence 7l 16v flex 4p manual',
      price: 'R$ 76.900',
    },
    {
      tipe: 'Minivan',
      pathImage: 'assets/Minivan/fiat-doblo-1.8-mpi-essence-7l-16v-flex-4p-manual-RS-91.990.jpg',
      name: 'Fiat doblo 1.8 mpi essence 7l 16v flex 4p manual',
      price: 'R$ 91.990',
    },
    {
      tipe: 'Minivan',
      pathImage: 'assets/Minivan/fiat-idea-1.8-mpi-adventure-16v-flex-4p-automatizado-RS-43.800.jpg',
      name: 'Fiat idea 1.8 mpi adventure 16v flex 4p automatizado',
      price: 'R$ 43.800',
    },
    {
      tipe: 'Minivan',
      pathImage: 'assets/Minivan/kia-soul-1.6-ex-16v-gasolina-4p-manual-RS-39.990.jpg',
      name: 'Kia soul 1.6 ex 16v gasolina 4p manual',
      price: 'R$ 39.990',
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
