import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule,RouterLink,MegaMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  Nav_fav_imgs:string = '../../../assets/icons/favorite.svg';
  Nav_bag_imgs:string = '../../../assets/icons/bag.svg';

  items: MegaMenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'New & Featured',
              //icon: 'pi pi-fw pi-video',
              items: [
                  [
                      {
                          label: 'New & Featured',
                          items: [{ label: 'New Arrivals',routerLink:[ 'main/new-arrival'] }, { label: 'Video 1.2' }]
                      },
                      {
                          label: 'Video 2',
                          items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                      }
                  ],
                  [
                      {
                          label: 'Video 3',
                          items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                      },
                      {
                          label: 'Video 4',
                          items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                      }
                  ]
              ]
          },
          {
              label: 'Mens',
              //icon: 'pi pi-fw pi-users',
              items: [
                  [
                      {
                          label: 'User 1',
                          items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                      },
                      {
                          label: 'User 2',
                          items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                      }
                  ],
                  [
                      {
                          label: 'User 3',
                          items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                      },
                      {
                          label: 'User 4',
                          items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                      }
                  ],
                  [
                      {
                          label: 'User 5',
                          items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                      },
                      {
                          label: 'User 6',
                          items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                      }
                  ]
              ]
          },
          {
              label: 'Womens',
              //icon: 'pi pi-fw pi-calendar',
              items: [
                  [
                      {
                          label: 'Event 1',
                          items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                      },
                      {
                          label: 'Event 2',
                          items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                      }
                  ],
                  [
                      {
                          label: 'Event 3',
                          items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                      },
                      {
                          label: 'Event 4',
                          items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                      }
                  ]
              ]
          },
          {
              label: 'Kids',
              //icon: 'pi pi-fw pi-cog',
              items: [
                  [
                      {
                          label: 'Setting 1',
                          items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                      },
                      {
                          label: 'Setting 2',
                          items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                      },
                      {
                          label: 'Setting 3',
                          items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                      }
                  ],
                  [
                      {
                          label: 'Technology 4',
                          items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                      }
                  ]
              ]
          }
      ];
  }
}