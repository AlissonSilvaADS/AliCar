import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peruasw',
  templateUrl: './peruasw.component.html',
  styleUrls: ['./peruasw.component.css']
})
export class PeruaswComponent implements OnInit {

  peruasws: any = [
    {
      tipe: 'Peruasw',
      pathImage: 'assets/Peruasw/audi-rs6-4.0-avant-v8-twinturbo-mhev-tiptronic-RS-1.150.000.jpg',
      name: 'Audi rs6 4.0 avant v8 twinturbo mhev tiptronic',
      price: 'R$ 1.150.000',
    },
    {
      tipe: 'Peruasw',
      pathImage: 'assets/Peruasw/audi-rs6-4.0-avant-v8-twinturbo-mhev-tiptronic-RS-1.290.900.jpg',
      name: 'Audi rs6 4.0 avant v8 twinturbo mhev tiptronic',
      price: 'R$ 1.290.900',
    },
    {
      tipe: 'Peruasw',
      pathImage: 'assets/Peruasw/fiat-palio-1.4-mpi-attractive-weekend-8v-flex-4p-manual-RS-32-900.jpg',
      name: 'Fiat palio 1.4 mpi attractive weekend 8v flex 4p manual',
      price: 'R$ 32-900',
    },
    {
      tipe: 'Peruasw',
      pathImage: 'assets/Peruasw/fiat-palio-1.8-mpi-adventure-weekend-16v-flex-4p-manual-RS-42.900.jpg',
      name: 'Fiat palio 1.8 mpi adventure weekend 16v flex 4p manual',
      price: 'R$ 42.900',
    },
    {
      tipe: 'Peruasw',
      pathImage: 'assets/Peruasw/palio-1.8-mpi-adventure-weekend-16v-flex2-4p-manual-RS-74.990.jpg',
      name: 'Palio 1.8 mpi adventure weekend 16v flex 4p manual',
      price: 'R$ 74.990',
    },
    {
      tipe: 'Peruasw',
      pathImage: 'assets/Peruasw/mini-cooper-2.0-s-top-clubman-16v-turbo-gasolina-4p-automatico-RS-134.900.jpg',
      name: 'Mini cooper 2.0 s top clubman 16v turbo gasolina 4p automatico',
      price: 'R$ 134.900',
    },
    {
      tipe: 'Peruasw',
      pathImage: 'assets/Peruasw/toyota-fielder-1.8-16v-gasolina-4p-automatico-RS-33-900.jpg',
      name: 'Toyota fielder 1.8 16v gasolina 4p automatico',
      price: 'R$ 33-900',
    },
    {
      tipe: 'Peruasw',
      pathImage: 'assets/Peruasw/volkswagen-golf-1.4-tsi-variant-comfortline-16v-total-flex-4p-tiptronic-RS-95.900.jpg',
      name: 'Volkswagen golf 1.4 tsi variant comfortline 16v total flex 4p tiptronic',
      price: 'R$ 95.900',
    },
    {
      tipe: 'Peruasw',
      pathImage: 'assets/Peruasw/volkswagen-space-cross-1.6-mi-8v-flex-4p-manual-RS-46.590.jpg',
      name: 'Volkswagen space cross 1.6 mi 8v flex 4p manual',
      price: 'R$ 46.590',
    },
    {
      tipe: 'Peruasw',
      pathImage: 'assets/Peruasw/volkswagen-spacefox-1.6-mi-trend-8v-flex-4p-manual-RS-36.990.jpg',
      name: 'Volkswagen spacefox 1.6 mi trend 8v flex 4p manual',
      price: 'R$ 36.990',
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
