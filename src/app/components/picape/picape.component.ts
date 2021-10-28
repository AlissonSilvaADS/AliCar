import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picape',
  templateUrl: './picape.component.html',
  styleUrls: ['./picape.component.css']
})
export class PicapeComponent implements OnInit {
  picapes: any = [
    {
      tipe: 'Picape',
      pathImage: 'assets/Picape/chevrolet-s10-2.8-ltz-4x4-cd-16v-turbo-diesel-4p-automatico-RS-169.000.jpg',
      name: 'Chevrolet s10 2.8 ltz 4x4 cd 16v turbo diesel 4p automatico',
      price: 'R$ 169.000',
    },
    {
      tipe: 'Picape',
      pathImage: 'assets/Picape/fiat-strada-1.4-mpi-hard-working-cs-8v-flex-2p-manual-RS-50.900.jpg',
      name: 'Fiat strada 1.4 mpi hard working cs 8v flex 2p manual',
      price: 'R$ 50.900',
    },

    {
      tipe: 'Picape',
      pathImage: 'assets/Picape/mitsubishi-l200-triton-3.2-hpe-4x4-cd-16v-turbo-intercooler-diesel-4p-automatico-RS-130.000.jpg',
      name: 'Mitsubishi l200 triton 3.2 hpe 4x4 cd 16v turbo intercooler diesel 4p automatico',
      price: 'R$ 130.000',
    },
    {
      tipe: 'Picape',
      pathImage: 'assets/Picape/renault-duster-oroch-2.0-16v-hiflex-dynamique-automatico-RS-85.900.jpg',
      name: 'Renault duster oroch 2.0 16v hiflex dynamique automatico',
      price: 'R$ 85.900',
    },

    {
      tipe: 'Picape',
      pathImage: 'assets/Picape/toyota-hilux-2.7-srv-4x2-cd-16v-flex-4p-automatico-RS-150.000.jpg',
      name: 'Toyota hilux 2.7 srv 4x2 cd 16v flex 4p automatico',
      price: 'R$ 150.000',
    },

    {
      tipe: 'Picape',
      pathImage: 'assets/Picape/toyota-hilux-2.8-srv-4x4-cd-16v-diesel-4p-automatico-RS-208.000.jpg',
      name: 'Toyota hilux 2.8 srv 4x4 cd 16v diesel 4p automatico',
      price: 'R$ 208.000',
    },

    {
      tipe: 'Picape',
      pathImage: 'assets/Picape/volkswagen-amarok-2.0-se-4x4-cd-16v-turbo-intercooler-diesel-4p-manual-RS-135.978.jpg',
      name: 'Volkswagen amarok 2.0 se 4x4 cd 16v turbo intercooler diesel 4p manual',
      price: 'R$ 135.978',
    },

    {
      tipe: 'Picape',
      pathImage: 'assets/Picape/volkswagen-amarok-3.0-v6-tdi-diesel-highline-extreme-cd-4motion-automatico-RS-244.000.jpg',
      name: 'Volkswagen amarok 3.0 v6 tdi diesel highline extreme cd 4motion automatico',
      price: 'R$ 244.000',
    },

    {
      tipe: 'Picape',
      pathImage: 'assets/Picape/volkswagen-saveiro-1.6-cross-ce-8v-flex-2p-manual-RS-39.990.jpg',
      name: 'Volkswagen saveiro 1.6 cross ce 8v flex 2p manual',
      price: 'R$ 39.990',
    },

    {
      tipe: 'Picape',
      pathImage: 'assets/Picape/volkswagen-saveiro-1.6-msi-trendline-cs-8v-flex-2p-manual-RS-82.900.jpg',
      name: 'Volkswagen saveiro 1.6 msi trendline cs 8v flex 2p manual',
      price: 'R$ 82.900',
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
