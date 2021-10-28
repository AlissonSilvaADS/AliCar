import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuggyComponent } from './components/buggy/buggy.component';
import { ConversivelComponent } from './components/conversivel/conversivel.component';
import { HatchbackComponent } from './components/hatchback/hatchback.component';
import { CupeComponent } from './components/cupe/cupe.component';
import { MinivanComponent } from './components/minivan/minivan.component';
import { PeruaSwComponent } from './components/perua-sw/perua-sw.component';
import { PicapeComponent } from './components/picape/picape.component';
import { SedaComponent } from './components/seda/seda.component';
import { VanComponent } from './components/utilitarios/van/van.component';
import { EsportivoComponent } from './components/utilitarios/esportivo/esportivo.component';

@NgModule({
  declarations: [
    AppComponent,
    BuggyComponent,
    ConversivelComponent,
    HatchbackComponent,
    CupeComponent,
    MinivanComponent,
    PeruaSwComponent,
    PicapeComponent,
    SedaComponent,
    VanComponent,
    EsportivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
