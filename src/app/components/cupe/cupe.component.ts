import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cupe',
  templateUrl: './cupe.component.html',
  styleUrls: ['./cupe.component.css']
})
export class CupeComponent implements OnInit {

  cupes: any = [
    {
      tipe: 'Cupe',
      pathImage: 'assets/Cupe/audi-r8-4.2-fsi-quattro-v8-32v-gasolina-2p-rtronic-RS-429.900.jpg',
      name: 'Audi r8 4.2 fsi quattro v8 32v gasolina 2p rtronic',
      price: 'R$ 429.900',
    },
    {
      tipe: 'Cupe',
      pathImage: 'assets/Cupe/chevrolet-corvette-6.2-v8-lt3-gasolina-stingray-automatico-RS-1.950.000.jpg',
      name: 'Chevrolet corvette 6.2 v8 lt3 gasolina stingray automatico',
      price: 'R$ 1.950.000',
    },
    {
      tipe: 'Cupe',
      pathImage: 'assets/Cupe/ford-mustang-5.0-gt-coupe-v8-gasolina-2p-manual-RS-239.000.jpg',
      name: 'Ford mustang 5.0 gt coupe v8 gasolina 2p manual',
      price: 'R$ 239.000',
    },
    {
      tipe: 'Cupe',
      pathImage: 'assets/Cupe/ford-mustang-5.0-gt-premium-coupe-v8-32v-gasolina-2p-automatico-RS-349.000.jpg',
      name: 'Ford mustang 5.0 gt premium coupe v8 32v gasolina 2p automatico',
      price: 'R$ 349.000',
    },
    {
      tipe: 'Cupe',
      pathImage: 'assets/Cupe/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-RS-569.900.jpg',
      name: 'Ford mustang 5.0 v8 tivct gasolina mach 1 selectshift',
      price: 'R$ 569.900',
    },
    {
      tipe: 'Cupe',
      pathImage: 'assets/Cupe/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-RS-599.900.jpg',
      name: 'Ford mustang 5.0 v8 tivct gasolina mach 1 selectshift',
      price: 'R$ 599.900',
    },
    {
      tipe: 'Cupe',
      pathImage: 'assets/Cupe/porsche-718-2.0-16v-h4-gasolina-cayman-pdk-RS-569.jpg',
      name: 'Porsche 718 2.0 16v h4 gasolina cayman pdk',
      price: 'R$ 569.000',
    },
    {
      tipe: 'Cupe',
      pathImage: 'assets/Cupe/porsche-911-3.0-24v-h6-gasolina-carrera-gts-pdk-RS-899.900.jpg',
      name: 'Porsche 911 3.0 24v h6 gasolina carrera gts pdk',
      price: 'R$ 899.900',
    },
    {
      tipe: 'Cupe',
      pathImage: 'assets/Cupe/porsche-911-3.0-24v-h6-gasolina-carrera-pdk-RS-899.000.jpg',
      name: 'Porsche 911 3.0 24v h6 gasolina carrera pdk',
      price: 'R$ 899.000',
    },
    {
      tipe: 'Cupe',
      pathImage: 'assets/Cupe/porsche-911-3.0-24v-h6-gasolina-carrera-s-pdk-RS-1.020.000.jpg',
      name: 'Porsche 911 3.0 24v h6 gasolina carrera s pdk',
      price: 'R$ 1.020.000',
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
