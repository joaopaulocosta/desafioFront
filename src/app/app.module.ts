import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {ChartModule} from 'primeng/chart';
import { GraphicComponent } from './graphic/graphic.component';
import {TableAtendPlanComponent } from './tableAtendPlan/tableAtendPlan.component';
import {TableModule} from 'primeng/table';
import {AtendimentosPlanejadosService} from './services/antendimentosPlanejados.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    GraphicComponent,
    TableAtendPlanComponent
  ],
  imports: [
    BrowserModule,
    MegaMenuModule,
    ChartModule,
    TableModule,
    AtendimentosPlanejadosService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
