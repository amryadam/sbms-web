import { Component, OnInit } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { MAINROUTES, MASTERDATA } from '../app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }],
      },
      {
        label: 'Auth',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: ['/admin'],
          },
          {
            label: 'Error',
            icon: 'pi pi-fw pi-times-circle',
            routerLink: ['/auth/error'],
          },
          {
            label: 'Access Denied',
            icon: 'pi pi-fw pi-lock',
            routerLink: ['/auth/access'],
          },
        ],
      },
      {
        label: 'Master Data',
        items: [
          {
            label: 'Location',
            icon: 'pi pi-fw pi-globe',
            items: [
              {
                label: 'Countries',
                icon: 'fa-regular fa-flag',
                routerLink: [MAINROUTES.MASTER, MASTERDATA.COUNTRIES],
              },
            ],
          },
          {
            label: 'Partner',
            icon: 'fa-solid fa-users-line fa-beat',
            items: [
              {
                label: 'Customer',
                icon: 'fa-solid fa-user-injured',
                routerLink: [MAINROUTES.MASTER, MASTERDATA.CUSTOMER],
              },
            ],
          },
          {
            label: 'Categories',
            icon: 'fa-solid fa-users-line',
            routerLink: [MAINROUTES.MASTER, MASTERDATA.CATEGORIES],
          },
          {
            label: 'Products',
            icon: 'fa-solid fa-users-line',
            routerLink: [MAINROUTES.MASTER, MASTERDATA.PRODUCTS],
          },
        ],
      },
      {
        label: 'Orders ',
        items: [
          {
            label: 'orders',
            icon: 'pi pi-fw pi-globe',
            routerLink: [MAINROUTES.ORDERS],
          },
        ],
      },
      // {
      //   label: 'UI Components',
      //   items: [
      //     {
      //       label: 'Form Layout',
      //       icon: 'pi pi-fw pi-id-card',
      //       routerLink: ['/uikit/formlayout'],
      //     },
      //     {
      //       label: 'Input',
      //       icon: 'pi pi-fw pi-check-square',
      //       routerLink: ['/uikit/input'],
      //     },
      //     {
      //       label: 'Float Label',
      //       icon: 'pi pi-fw pi-bookmark',
      //       routerLink: ['/uikit/floatlabel'],
      //     },
      //     {
      //       label: 'Invalid State',
      //       icon: 'pi pi-fw pi-exclamation-circle',
      //       routerLink: ['/uikit/invalidstate'],
      //     },
      //     {
      //       label: 'Button',
      //       icon: 'pi pi-fw pi-box',
      //       routerLink: ['/uikit/button'],
      //     },
      //     {
      //       label: 'Table',
      //       icon: 'pi pi-fw pi-table',
      //       routerLink: ['/uikit/table'],
      //     },
      //     {
      //       label: 'List',
      //       icon: 'pi pi-fw pi-list',
      //       routerLink: ['/uikit/list'],
      //     },
      //     {
      //       label: 'Tree',
      //       icon: 'pi pi-fw pi-share-alt',
      //       routerLink: ['/uikit/tree'],
      //     },
      //     {
      //       label: 'Panel',
      //       icon: 'pi pi-fw pi-tablet',
      //       routerLink: ['/uikit/panel'],
      //     },
      //     {
      //       label: 'Overlay',
      //       icon: 'pi pi-fw pi-clone',
      //       routerLink: ['/uikit/overlay'],
      //     },
      //     {
      //       label: 'Media',
      //       icon: 'pi pi-fw pi-image',
      //       routerLink: ['/uikit/media'],
      //     },
      //     {
      //       label: 'Menu',
      //       icon: 'pi pi-fw pi-bars',
      //       routerLink: ['/uikit/menu'],
      //       routerLinkActiveOptions: {
      //         paths: 'subset',
      //         queryParams: 'ignored',
      //         matrixParams: 'ignored',
      //         fragment: 'ignored',
      //       },
      //     },
      //     {
      //       label: 'Message',
      //       icon: 'pi pi-fw pi-comment',
      //       routerLink: ['/uikit/message'],
      //     },
      //     {
      //       label: 'File',
      //       icon: 'pi pi-fw pi-file',
      //       routerLink: ['/uikit/file'],
      //     },
      //     {
      //       label: 'Chart',
      //       icon: 'pi pi-fw pi-chart-bar',
      //       routerLink: ['/uikit/charts'],
      //     },
      //     {
      //       label: 'Misc',
      //       icon: 'pi pi-fw pi-circle',
      //       routerLink: ['/uikit/misc'],
      //     },
      //   ],
      // },
      // {
      //   label: 'Prime Blocks',
      //   items: [
      //     {
      //       label: 'Free Blocks',
      //       icon: 'pi pi-fw pi-eye',
      //       routerLink: ['/blocks'],
      //       badge: 'NEW',
      //     },
      //     {
      //       label: 'All Blocks',
      //       icon: 'pi pi-fw pi-globe',
      //       url: ['https://www.primefaces.org/primeblocks-ng'],
      //       target: '_blank',
      //     },
      //   ],
      // },
      // {
      //   label: 'Utilities',
      //   items: [
      //     {
      //       label: 'PrimeIcons',
      //       icon: 'pi pi-fw pi-prime',
      //       routerLink: ['/utilities/icons'],
      //     },
      //     {
      //       label: 'PrimeFlex',
      //       icon: 'pi pi-fw pi-desktop',
      //       url: ['https://www.primefaces.org/primeflex/'],
      //       target: '_blank',
      //     },
      //   ],
      // },
      // {
      //   label: 'Pages',
      //   icon: 'pi pi-fw pi-briefcase',
      //   items: [
      //     {
      //       label: 'Landing',
      //       icon: 'pi pi-fw pi-globe',
      //       routerLink: ['/landing'],
      //     },
      //     {
      //       label: 'Auth',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Login',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/admin'],
      //         },
      //         {
      //           label: 'Error',
      //           icon: 'pi pi-fw pi-times-circle',
      //           routerLink: ['/auth/error'],
      //         },
      //         {
      //           label: 'Access Denied',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/auth/access'],
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Crud',
      //       icon: 'pi pi-fw pi-pencil',
      //       routerLink: ['/pages/crud'],
      //     },
      //     {
      //       label: 'Timeline',
      //       icon: 'pi pi-fw pi-calendar',
      //       routerLink: ['/pages/timeline'],
      //     },
      //     {
      //       label: 'Not Found',
      //       icon: 'pi pi-fw pi-exclamation-circle',
      //       routerLink: ['/notfound'],
      //     },
      //     {
      //       label: 'Empty',
      //       icon: 'pi pi-fw pi-circle-off',
      //       routerLink: ['/pages/empty'],
      //     },
      //   ],
      // },
      // {
      //   label: 'Get Started',
      //   items: [
      //     {
      //       label: 'Documentation',
      //       icon: 'pi pi-fw pi-question',
      //       routerLink: ['/documentation'],
      //     },
      //     {
      //       label: 'View Source',
      //       icon: 'pi pi-fw pi-search',
      //       url: ['https://github.com/primefaces/sakai-ng'],
      //       target: '_blank',
      //     },
      //   ],
      // },
    ];
  }
}
