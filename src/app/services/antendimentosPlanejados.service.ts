import { NgModule } from '@angular/core';
import { AtendimentoPlanejado } from '../models/atendimentoPlanejado';

@NgModule()
export class AtendimentosPlanejadosService {

    dadosPaginados: AtendimentoPlanejado[];
    dados: AtendimentoPlanejado[] = [ 
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
        },
        {
            "data": "01/01/2019",
            "demanda": "53",
            "capacidade": "60",
            "atendimentoPlanejado": "55",
            "atendimentoRealizado": "54",
            "desvio": "1"
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
}        
