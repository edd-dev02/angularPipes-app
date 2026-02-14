import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,

})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] | undefined;

  items: MenuItem[] | undefined;

  constructor(  ) {}

    ngOnInit() {

      // Sin uso
        this.menuItems = [
            {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                { label: 'Textos y Fechas', icon: 'pi pi-align-left'},
                { label: 'Números', icon: 'pi pi-dollar'},
                { label: 'No comúnes', icon: 'pi pi-globe'},
              ]
            },
            {
              label: 'Pipes Personalizados',
              icon: 'pi pi-cog',
              items: [
                { label: 'Otro elemento', icon: 'pi pi-align-left'},

              ]
            },
        ];

        // Usando
        this.items = [
          {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                { label: 'Textos y Fechas', icon: 'pi pi-align-left', routerLink: '/'},
                { label: 'Números', icon: 'pi pi-dollar', routerLink: 'numbers'},
                { label: 'No comúnes', icon: 'pi pi-globe', routerLink: 'uncommon'},
              ]
          },
          {
              label: 'Pipes Personalziados',
              icon: 'pi pi-desktop',
              items: [
                { label: 'Otro elemento', icon: 'pi pi-align-left', routerLink: 'custom'},
              ]
          },

      ]

    }
 }
