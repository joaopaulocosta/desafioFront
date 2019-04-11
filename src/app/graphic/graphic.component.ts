import { Component, OnInit } from '@angular/core';
import { AtendimentosPlanejadosService } from '../services/antendimentosPlanejados.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  data: any;
  options: any;

  constructor(private atendPlanService: AtendimentosPlanejadosService ) {

        this.data = {
          labels: this.atendPlanService.getAllDates(),
          datasets: [
              {
                  label: 'Ocorrências',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data: this.atendPlanService.getAllValuesDifference()
              },
          ]
        }
        
        this.options = {
            title: {
                display: true,
                text: 'Diferença entre Capacidade e Atendimento Realizado',
                fontSize: 16
            }
        };
  }

  ngOnInit() {
  }


}
