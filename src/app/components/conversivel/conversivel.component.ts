import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversivel',
  templateUrl: './conversivel.component.html',
  styleUrls: ['./conversivel.component.css']
})
export class ConversivelComponent implements OnInit {

  conversiveis: any = [
    {
      tipe: 'Conversivel',
      pathImage: 'assets/Conversivel/bmw-428i-2.0-sport-gp-cabrio-16v-turbo-gasolina-2p-automatico-RS-187.900.jpg',
      name: 'Bmw 428i 2.0 sport gp cabrio 16v turbo gasolina 2p automatico',
      price: 'R$ 187.900',
    },
    {
      tipe: 'Conversivel',
      pathImage: 'assets/Conversivel/bmw-650i-4.4-cabrio-v8-32v-turbo-gasolina-2p-automatico-RS-289.900.jpg',
      name: 'Bmw 650i 4.4 cabrio v8 32v turbo gasolina 2p automatico',
      price: 'R$ 289.900',
    },
    {
      tipe: 'Conversivel',
      pathImage: 'assets/Conversivel/chevrolet-corvette-6.2-stingray-conversivel-v8-gasolina-2p-automatico-RS-730.000.jpg',
      name: 'Chevrolet corvette 6.2 stingray conversivel v8 gasolina 2p automatico',
      price: 'R$ 730.000',
    },
    {
      tipe: 'Conversivel',
      pathImage: 'assets/Conversivel/mercedesbenz-c-300-2.0-cgi-gasolina-cabriolet-9gtronic-RS-469.900.jpg',
      name: 'Mercedesbenz c 300 2.0 cgi gasolina cabriolet 9gtronic',
      price: 'R$ 469.900',
    },
    {
      tipe: 'Conversivel',
      pathImage: 'assets/Conversivel/mini-cooper-1.6-s-cabrio-16v-gasolina-2p-automatico-RS-102.900.jpg',
      name: 'Mini cooper 1.6 s cabrio 16v gasolina 2p automatico',
      price: 'R$ 102.900',
    },
    {
      tipe: 'Conversivel',
      pathImage: 'assets/Conversivel/porsche-718-2.0-16v-h4-gasolina-boxster-pdk-RS-555.000.jpg',
      name: 'P15:36 23/10/2021orsche 718 2.0 16v h4 gasolina boxster pdk',
      price: 'R$ 555.000',
    },
    {
      tipe: 'Conversivel',
      pathImage: 'assets/Conversivel/porsche-911-3.0-24v-h6-gasolina-carrera-4s-cabriolet-pdk-RS-1.390.000.jpg',
      name: 'Porsche 911 3.0 24v h6 gasolina carrera 4s cabriolet pdk',
      price: 'R$ 1.390.000',
    },
    {
      tipe: 'Conversivel',
      pathImage: 'assets/Conversivel/porsche-911-3.0-24v-h6-gasolina-carrera-s-cabriolet-pdk-RS-1.270.000.jpg',
      name: 'Porsche 911 3.0 24v h6 gasolina carrera s cabrioletpdk',
      price: 'R$ 1.270.000',
    },
    {
      tipe: 'Conversivel',
      pathImage: 'assets/Conversivel/porsche-911-3.0-24v-h6-gasolina-carrera-s-cabriolet-pdk-RS-1.290.000.jpg',
      name: 'Porsche 9113.0 24v h6 gasolina carrera s cabriolet pdk',
      price: 'R$ 1.290.000',
    },
    {
      tipe: 'Conversivel',
      pathImage: 'assets/Conversivel/porsche-911-3.8-cabriolet-turbo-s-gasolina-2p-automatico-RS-1.270.000.jpg',
      name: 'Porsche 9113.0 24v h6 gasolina carrera s cabriolet pdk',
      price: 'R$ 1.270.000',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
