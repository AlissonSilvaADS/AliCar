import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuggyComponent } from './components/buggy/buggy.component';
import { ConversivelComponent } from './components/conversivel/conversivel.component';
import { CupeComponent } from './components/cupe/cupe.component';
import { HatchbackComponent } from './components/hatchback/hatchback.component';
import { MinivanComponent } from './components/minivan/minivan.component';
import { PeruaswComponent } from './components/peruasw/peruasw.component';
import { PicapeComponent } from './components/picape/picape.component';
import { SedaComponent } from './components/seda/seda.component';
import { EsportivoComponent } from './components/utilitarios/esportivo/esportivo.component';
import { VanComponent } from './components/utilitarios/van/van.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'Buggy', component: BuggyComponent
  },
  {
    path: 'Conversivel', component: ConversivelComponent
  },
  {
    path: 'Cupe', component: CupeComponent
  },
  {
    path: 'Hatchback', component: HatchbackComponent
  },
  {
    path: 'Minivan', component: MinivanComponent
  },
  {
    path: 'Peruasw', component: PeruaswComponent
  },
  {
    path: 'Picape', component: PicapeComponent
  },
  {
    path: 'Sedâ', component: SedaComponent
  },
  {
    path: 'Esportivo', component: EsportivoComponent
  },
  {
    path: 'Van', component: VanComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
