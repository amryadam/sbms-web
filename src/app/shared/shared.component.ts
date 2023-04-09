import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { ADMIN, MAIN_ROUTES, MASTER_DATA } from '../app-routing.module';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})
export class SharedComponent {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Master Data',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Location',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Countries',
                icon: 'pi pi-fw pi-bookmark',
                routerLink: [MAIN_ROUTES.MASTER, MASTER_DATA.COUNTRIES],
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: [MAIN_ROUTES.ADMIN, ADMIN.LOGIN],
      },
      {
        label: 'LOGOUT',
        icon: 'pi pi-fw pi-sign-out',
        routerLink: [MAIN_ROUTES.ADMIN, ADMIN.LOGOUT],
      },
    ];
  }
}
