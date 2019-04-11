import { NgModule } from '@angular/core';
import { AtendimentoPlanejado } from '../models/atendimentoPlanejado';

@NgModule()
export class AtendimentosPlanejadosService {

    dadosPaginados: AtendimentoPlanejado[];
    allDates: string[] = [];
    allValuesDifference: number[] = [];
    dados: AtendimentoPlanejado[] = [ 
        {
            "data": "01/01/2019",
            "demanda": 53,
            "capacidade": 60,
            "atendimentoPlanejado": 55,
            "atendimentoRealizado": 54,
            "desvio": 1
        },
        {
            "data": "02/01/2019",
            "demanda": 43,
            "capacidade": 50,
            "atendimentoPlanejado": 43,
            "atendimentoRealizado": 41,
            "desvio": 2
        },
        {
            "data": "03/01/2019",
            "demanda": 53,
            "capacidade": 60,
            "atendimentoPlanejado": 55,
            "atendimentoRealizado": 54,
            "desvio": 1
        },
        {
            "data": "04/01/2019",
            "demanda": 53,
            "capacidade": 60,
            "atendimentoPlanejado": 55,
            "atendimentoRealizado": 54,
            "desvio": 1
        },
        {
            "data": "05/01/2019",
            "demanda": 33,
            "capacidade": 60,
            "atendimentoPlanejado": 55,
            "atendimentoRealizado": 32,
            "desvio": 13
        },
        {
            "data": "06/01/2019",
            "demanda": 53,
            "capacidade": 60,
            "atendimentoPlanejado": 55,
            "atendimentoRealizado": 54,
            "desvio": 1
        },
        {
            "data": "07/01/2019",
            "demanda": 33,
            "capacidade": 40,
            "atendimentoPlanejado": 35,
            "atendimentoRealizado": 34,
            "desvio": 1
        },
        {
            "data": "08/01/2019",
            "demanda": 53,
            "capacidade": 60,
            "atendimentoPlanejado": 55,
            "atendimentoRealizado": 54,
            "desvio": 1
        },
        {
            "data": "09/01/2019",
            "demanda": 63,
            "capacidade": 60,
            "atendimentoPlanejado": 55,
            "atendimentoRealizado": 60,
            "desvio": -5
        },
        {
            "data": "10/01/2019",
            "demanda": 53,
            "capacidade": 60,
            "atendimentoPlanejado": 55,
            "atendimentoRealizado": 54,
            "desvio": 1
        },
        {
            "data": "11/01/2019",
            "demanda": 90,
            "capacidade": 60,
            "atendimentoPlanejado": 55,
            "atendimentoRealizado": 60,
            "desvio": -5
        },
        {
            "data": "12/01/2019",
            "demanda": 13,
            "capacidade": 60,
            "atendimentoPlanejado": 45,
            "atendimentoRealizado": 13,
            "desvio": -32
        }



    ];

    constructor() {}

    getAtendimentosPlanejadosList(page, lines ) {
        this.dadosPaginados = [];
        let init = page * lines;
        let end = ((page * lines) + lines) < this.dados.length ? (page * lines) + lines : this.dados.length;
        for(let i = init; i < end ; i++){
            this.dadosPaginados.push(this.dados[i]);
        }
        return  this.dadosPaginados;
    }

    totalRecords(){
        return this.dados.length;
    }

    getAllDates(){   
        this.dados.forEach( (aux) => {
            this.allDates.push(aux.data);
        });
        return this.allDates; 
    }

    getAllValuesDifference(){   
        this.dados.forEach( (aux) => {
            this.allValuesDifference.push(aux.capacidade - aux.atendimentoRealizado);
        });
        return this.allValuesDifference; 
    }
}        
