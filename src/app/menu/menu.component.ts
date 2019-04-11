import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

        ngOnInit() {
            this.items = [
                {
                  label: 'Tela Princípal', icon: 'pi pi-fw pi-home',
                },
                {
                  label: 'Atendimentos', icon: 'pi pi-fw pi-briefcase',
                },
                {
                  label: 'Relatórios', icon: 'pi pi-fw pi-chart-bar',
                },
                {
                  label: 'Configurações', icon: 'pi pi-fw pi-cog',
                },
                {
                  label: 'Sair', icon: 'pi pi-fw pi-sign-out',
                },

            ];
        }

}
