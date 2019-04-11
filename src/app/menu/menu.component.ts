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
                    label: 'Tela 1', icon: 'fa fa-fw fa-check',
                },
                {
                  label: 'Tela 2', icon: 'fa fa-fw fa-check',
                },
                {
                  label: 'Tela 3', icon: 'fa fa-fw fa-check',
                },
                {
                  label: 'Tela 4', icon: 'fa fa-fw fa-check',
                },
            ];
        }

}
