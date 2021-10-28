import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esportivo',
  templateUrl: './esportivo.component.html',
  styleUrls: ['./esportivo.component.css']
})
export class EsportivoComponent implements OnInit {
  esportivos: any = [
    {
      tipe: 'Esportivo',
      pathImage: 'assets/Utilitarios/Esportivos/bmw-x1-2.0-16v-turbo-activeflex-sdrive20i-4p-automatico-RS-157.990.jpg',
      name: 'Bmw x1 2.0 16v turbo activeflex sdrive20i 4p automatico',
      price: 'R$ 157.990',
    },
    {
      tipe: 'Esportivo',
      pathImage: 'assets/Utilitarios/Esportivos/bmw-x1-2.0-16v-turbo-activeflex-sdrive20i-xline-4p-automatico-RS-262.000.jpg',
      name: 'Bmw x1 2.0 16v turbo activeflex sdrive20i xline 4p automatico',
      price: 'R$ 262.000',
    },
    {
      tipe: 'Esportivo',
      pathImage: 'assets/Utilitarios/Esportivos/ford-ecosport-1.5-tivct-flex-titanium-automatico-RS-99.900.jpg',
      name: 'Ford ecosport 1.5 tivct flex titanium automatico',
      price: 'R$ 99.900',
    },
    {
      tipe: 'Esportivo',
      pathImage: 'assets/Utilitarios/Esportivos/hyundai-ix35-2.0-mpfi-gl-16v-flex-4p-automatico-RS-112.900.jpg',
      name: 'Hyundai ix35 2.0 mpfi gl 16v flex 4p automatico',
      price: 'R$ 112.900',
    },
    {
      tipe: 'Esportivo',
      pathImage: 'assets/Utilitarios/Esportivos/jeep-compass-2.0-16v-diesel-longitude-4x4-automatico-RS-158.977.jpg',
      name: 'Jeep compass 2.0 16v diesel longitude 4x4 automatico',
      price: 'R$ 158.977',
    },
    {
      tipe: 'Esportivo',
      pathImage: 'assets/Utilitarios/Esportivos/jeep-renegade-1.8-16v-flex-longitude-4p-automatico-RS-74.900.jpg',
      name: 'Jeep renegade 1.8 16v flex longitude 4p automatico',
      price: 'R$ 74.900',
    },
    {
      tipe: 'Esportivo',
      pathImage: 'assets/Utilitarios/Esportivos/lexus-nx-200t-2.0-luxury-4x4-16v-turbo-gasolina-4p-automatico-RS-151.000.jpg',
      name: 'Lexus nx 200t 2.0 luxury 4x4 16v turbo gasolina 4p automatico',
      price: 'R$ 151.000',
    },
    {
      tipe: 'Esportivo',
      pathImage: 'assets/Utilitarios/Esportivos/mercedesbenz-glc-63-amg-4.0-v8-turbo-gasolina-coupe-s-4matic+-speedshift-RS-660.000.jpg',
      name: 'Mercedesbenz glc 63 amg 4.0 v8 turbo gasolina coupe s 4matic+ speedshift',
      price: 'R$ 660.000',
    },
    {
      tipe: 'Esportivo',
      pathImage: 'assets/Utilitarios/Esportivos/renault-captur-1.6-16v-sce-flex-intense-xtronic-RS-88.987.jpg',
      name: 'Renault captur 1.6 16v sce flex intense xtronic',
      price: 'R$ 88.987',
    },
    {
      tipe: 'Esportivo',
      pathImage: 'assets/Utilitarios/Esportivos/troller-t4-3.2-xlt-4x4-20v-turbo-intercooler-diesel-2p-manual-RS-145.950.jpg',
      name: 'Troller t4 3.2 xlt 4x4 20v turbo intercooler diesel 2p manual',
      price: 'R$ 145.950',
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
