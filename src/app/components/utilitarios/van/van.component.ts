import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-van',
  templateUrl: './van.component.html',
  styleUrls: ['./van.component.css']
})
export class VanComponent implements OnInit {

  vans: any = [
    {
      tipe: 'Van',
      pathImage: 'assets/Utilitarios/Van/citroen-jumper-2.3-hdi-diesel-furgao-35lh-3p-manual-RS-163.000.jpg',
      name: 'Citroen jumper 2.3 hdi diesel furgao 35lh 3p manual',
      price: 'R$ 163.000',
    },
    {
      tipe: 'Van',
      pathImage: 'assets/Utilitarios/Van/fiat-ducato-2.3-maxicargo-12-16v-turbo-diesel-4p-manual-RS-124.900.jpg',
      name: 'Fiat ducato 2.3 maxicargo 12 16v turbo diesel 4p manual',
      price: 'R$ 124.900',
    },
    {
      tipe: 'Van',
      pathImage: 'assets/Utilitarios/Van/fiat-fiorino-1.4-mpi-furgao-hard-working-8v-flex-2p-manual-RS-71.900.jpg',
      name: 'Fiat fiorino 1.4 mpi furgao hard working 8v flex 2p manual',
      price: 'R$ 71.900',
    },
    {
      tipe: 'Van',
      pathImage: 'assets/Utilitarios/Van/fiat-fiorino-1.4-mpi-furgao-hard-working-8v-flex-2p-manual-RS-73.900.jpg',
      name: 'Fiat fiorino 1.4 mpi furgao hard working 8v flex 2p manual',
      price: 'R$ 73.900',
    },
    {
      tipe: 'Van',
      pathImage: 'assets/Utilitarios/Van/iveco-daily-35s14-chassi-cabine-turbo-intercooler-diesel-2p-manual-RS-156.900.jpg',
      name: 'Iveco daily 35s14 chassi cabine turbo intercooler diesel 2p manual',
      price: 'R$ 156.900',
    },
    {
      tipe: 'Van',
      pathImage: 'assets/Utilitarios/Van/iveco-daily-35s14-gran-furgone-turbo-intercooler-diesel-3p-manual-RS-165.000.jpg',
      name: 'Iveco daily 35s14 gran furgone turbo intercooler diesel 3p manual',
      price: 'R$ 165.000',
    },
    {
      tipe: 'Van',
      pathImage: 'assets/Utilitarios/Van/mercedesbenz-sprinter-2.2-415-cdi-van-16-lugares-teto-alto-16v-biturbo-diesel-manual-RS-124.900.jpg',
      name: 'Mercedesbenz sprinter 2.2 415 cdi van 16 lugares teto alto 16v biturbo diesel manual',
      price: 'R$ 124.900',
    },
    {
      tipe: 'Van',
      pathImage: 'assets/Utilitarios/Van/mercedesbenz-sprinter-2.2-cdi-diesel-chassis-515-extra-longo-manual-RS-185-000.jpg',
      name: 'Mercedesbenz sprinter 2.2 cdi diesel chassis 515 extra longo manual',
      price: 'R$ 185-000',
    },
    {
      tipe: 'Van',
      pathImage: 'assets/Utilitarios/Van/mercedesbenz-sprinter-2.2-cdi-diesel-furgao-416-ta-extra-longo-manual-RS-212.000.jpg',
      name: 'Mercedesbenz sprinter 2.2 cdi diesel furgao 416 ta extra longo manual',
      price: 'R$ 212.000',
    },
    {
      tipe: 'Van',
      pathImage: 'assets/Utilitarios/Van/renault-master-2.3-dci-diesel-minibus-executive-16l-l3h2-3p-manual-RS-160.000.jpg',
      name: 'Renault master 2.3 dci diesel minibus executive 16l l3h2 3p manual',
      price: 'R$ 160.000',
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
