import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuggyComponent } from './components/buggy/buggy.component';
import { ConversivelComponent } from './components/conversivel/conversivel.component';
import { HatchbackComponent } from './components/hatchback/hatchback.component';
import { CupeComponent } from './components/cupe/cupe.component';
import { MinivanComponent } from './components/minivan/minivan.component'
import { PeruaswComponent } from './components/peruasw/peruasw.component';;
import { PicapeComponent } from './components/picape/picape.component';
import { SedaComponent } from './components/seda/seda.component';
import { VanComponent } from './components/utilitarios/van/van.component';
import { EsportivoComponent } from './components/utilitarios/esportivo/esportivo.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    BuggyComponent,
    ConversivelComponent,
    HatchbackComponent,
    CupeComponent,
    MinivanComponent,
    PeruaswComponent,
    PicapeComponent,
    SedaComponent,
    VanComponent,
    EsportivoComponent,
    PeruaswComponent,
    MenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
