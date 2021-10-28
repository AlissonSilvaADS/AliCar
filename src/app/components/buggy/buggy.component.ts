import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buggy',
  templateUrl: './buggy.component.html',
  styleUrls: ['./buggy.component.css']
})
export class BuggyComponent implements OnInit {

  buggys: any = [
    {
      tipe: 'Buggy',
      pathImage: 'assets/Buggy/brm-m8-1.6-gasolina-manual-RS-51.000.jpg',
      name: 'Brm m8 1.6 gasolina manual',
      price: 'R$ 51.000',
    },
    {
      tipe: 'Buggy',
      pathImage: 'assets/Buggy/bugre-iii-1.6-gasolina-manual-RS-23.000.jpg',
      name: 'Bugre iii 1.6 gasolina manual',
      price: 'R$ 23.000',
    },
    {
      tipe: 'Buggy',
      pathImage: 'assets/Buggy/bugway-buggy-1.6-luxo-gasolina-manual-RS-38.000.jpg',
      name: 'Bugway buggy 1.6 luxo gasolina manual',
      price: 'R$ 38.000',
    },
    {
      tipe: 'Buggy',
      pathImage: 'assets/Buggy/cauype-cauype-1.8-8v-sport-gasolina-manual-RS-89.900.jpg',
      name: 'Cauype cauype 1.8 8v sport gasolina manual',
      price: 'R$ 89.900',
    },
    {
      tipe: 'Buggy',
      pathImage: 'assets/Buggy/emis-buggy-gasolina-manual-RS-39.980.jpg',
      name: 'Emis buggy gasolina manual',
      price: 'R$ 39.980',
    },
    {
      tipe: 'Buggy',
      pathImage: 'assets/Buggy/emis-buggy-gasolina-manual-RS-42.000.jpg',
      name: 'Emis buggy gasolina manual',
      price: 'R$ 42.000',
    },
    {
      tipe: 'Buggy',
      pathImage: 'assets/Buggy/rdk-tiger-1.6-8v-gasolina-manual-RS-120.000.jpg',
      name: 'Rdk tiger 1.6 8v gasolina manual',
      price: 'R$ 120.000',
    },
    {
      tipe: 'Buggy',
      pathImage: 'assets/Buggy/volkswagen-buggy-1.6-8v-gasolina-2p-manual-RS-49.999.jpg',
      name: 'Volkswagen buggy 1.6 8v gasolina 2p manual',
      price: 'R$ 49.999',
    },

    {
      tipe: 'Buggy',
      pathImage: 'assets/Buggy/walk-walksport-1.6-luxo-8v-gasolina-manual-RS-40.500.jpg',
      name: 'Walk walksport 1.6 luxo 8v gasolina manual',
      price: 'R$ 40.500',
    },

    {
      tipe: 'Buggy',
      pathImage: 'assets/Buggy/way-brasil-buggy-gasolina-manual-44.000.jpg',
      name: 'Way brasil buggy gasolina manual',
      price: 'R$ 44.000',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
