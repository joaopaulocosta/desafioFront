import { Component, OnInit } from '@angular/core';
import { AtendimentoPlanejado } from '../models/atendimentoPlanejado';
import { AtendimentosPlanejadosService } from '../services/antendimentosPlanejados.service';

@Component({
  selector: 'app-tableAtendPlan',
  templateUrl: './tableAtendPlan.component.html',
  styleUrls: ['./tableAtendPlan.component.css']
})
export class TableAtendPlanComponent implements OnInit {

  constructor(private atendPlanService: AtendimentosPlanejadosService ) { }

  atendimentosPlanejados: AtendimentoPlanejado[];

  ngOnInit() {
    this.atendimentosPlanejados = this.atendPlanService.getAtendimentosPlanejadosList();
  }

}
