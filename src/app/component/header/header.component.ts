import { Component, OnInit } from '@angular/core';
import { RouterLink,NavigationEnd,Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, RouterLink, MegaMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  Nav_fav_imgs: string = '../../../assets/icons/favorite.svg';
  Nav_bag_imgs: string = '../../../assets/icons/bag.svg';
  showMenu = false;
  
  items: MegaMenuItem[] | undefined;
  isShowOffer: boolean = false;
  /**
   *
  */
 constructor(private router:Router) {}
 ngOnInit() {
    //checking the navigation end so that we can only show 40% off on home page/and product display page else everywhere it should be hidden.
    this.router.events.subscribe((event)=>{
    if(event instanceof NavigationEnd)
      {
        switch (event.url) {
          case '/main/sign-up':
            this.isShowOffer = false;
            break;
        
            case '/main/cart':
              this.isShowOffer = false;
              break;
          
        
              case '/main/find-store':
                this.isShowOffer = false;
                break;
            
          default:
            this.isShowOffer = true;
            break;
        }
      }
    });
    this.items = [
      {
        label: 'New & Featured',
        //icon: 'pi pi-fw pi-video',
        items: [
          [
            {
              label: 'New & Featured',
              items: [
                {
                  label: 'New Arrivals',
                  routerLink: ['main/products'],
                  queryParams: { Type:'New-Arrival',Category: 'new' },
                }
              ],
            },
            {
              label: 'New For Men',
              items: [
                { label: 'Shoes',
                routerLink:[ 'main/products'],
                queryParams:{Type:'New-Arrival',Category:'men'} 
              },
              { label: 'Clothing',
              routerLink:[ 'main/products'],
              queryParams:{Type:'New-Arrival',Category:'men'} 
            },
            { label: 'Accessories',
            routerLink:[ 'main/products'],
            queryParams:{Type:'New-Arrival',Category:'men'}
          },
        ],
      },
    ],
    [
      {
        label: 'New For Women',
        items: [
          { label: 'Shoes',
                routerLink:[ 'main/products'],
                queryParams:{Type:'New-Arrival',Category:'women'} },
                { label: 'Clothing',
                routerLink:[ 'main/products'],
                queryParams:{Type:'New-Arrival',Category:'women'} },
                { label: 'Accessories',
                routerLink:[ 'main/products'],
                queryParams:{Type:'New-Arrival',Category:'women'} },
              ],
            },
            {
              label: 'New For Kids',
              items: [
                { label: 'Shoes',
                routerLink:[ 'main/products'],
                queryParams:{Type:'New-Arrival',Category:'kids'} },
                { label: 'Clothing',
                routerLink:[ 'main/products'],
                queryParams:{Type:'New-Arrival',Category:'kids'} },
                { label: 'Accessories',
                routerLink:[ 'main/products'],
                queryParams:{Type:'New-Arrival',Category:'kids'} },
              ],
            },
          ],
        ],
      },
      {
        label: 'Mens',
        //icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: 'Jordan',
              items: [
                      { label: 'All Jordan',
                      routerLink:[ 'main/products'],
                      queryParams:{Type:'Men',Category:'mens'}
                      },
                      { label: 'New Jordan',
                      routerLink:[ 'main/products'],
                      queryParams:{Type:'Men',Category:'mens'}
                      },
                      { label: 'Jordan Shoes',
                      routerLink:[ 'main/products'],
                      queryParams:{Type:'Men',Category:'mens'}
                      },
                      { label: 'Jordan Clothing',
                      routerLink:[ 'main/products'],
                      queryParams:{Type:'Men',Category:'mens'}
                      },
                      { label: 'Jordan Accessories',
                      routerLink:[ 'main/products'],
                      queryParams:{Type:'Men',Category:'mens'}
                      }
                    ],
            }
          ],
          [
            {
              label: 'Shoes',
              items: [{ label: 'All Shoes',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Men',Category:'mens'} }, { label: 'Newest Sneakers',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Men',Category:'mens'} }, { label: 'Jordan',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Men',Category:'mens'} }, { label: 'Lifestyle',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Men',Category:'mens'} }, { label: 'Running',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Men',Category:'mens'} }],
            }
          ],
          [
            {
              label: 'Clothing',
              items: [{ label: 'All Clothing',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Men',Category:'mens'} }, { label: 'Sports',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Men',Category:'mens'} }],
            },
            {
              label: 'Accessories',
              items: [{ label: 'All Accessories',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Men',Category:'mens'} }, { label: 'Bags & Bagpacks',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Men',Category:'mens'} }],
            },
          ],
        ],
      },
      {
        label: 'Womens',
        //icon: 'pi pi-fw pi-calendar',
        items: [
          [
            {
              label: 'Jordan',
              items: [{ label: 'All Jordan' }, { label: 'New Jordan' },{ label: 'Jordan Shoes' },{ label: 'Jordan Clothing' },{ label: 'Jordan Accessories' }],
            }
          ],
          [
            {
              label: 'Shoes',
              items: [{ label: 'All Shoes' }, { label: 'Newest Sneakers' }, { label: 'Jordan' }, { label: 'Lifestyle' }, { label: 'Running' }],
            }
          ],
          [
            {
              label: 'Clothing',
              items: [{ label: 'All Clothing' }, { label: 'Sports' }],
            },
            {
              label: 'Accessories',
              items: [{ label: 'All Accessories' }, { label: 'Bags & Bagpacks' }],
            },
          ],
        ],
      },
      {
        label: 'Kids',
        //icon: 'pi pi-fw pi-cog',
        items: [
          [
            {
              label: 'Kids By Age',
              items: [{ label: 'Older Kids(7-15 years)',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Kid',Category:'kids'} }, { label: 'Younger Kids(4-7 years)',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Kid',Category:'kids'} },{ label: 'Babies & Toddlers(0-4 years)',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Kid',Category:'kids'} }],
            }
          ],
          [
            {
              label: 'Category',
              items: [{ label: 'Boys',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Kid',Category:'kids'} }, { label: 'Girls',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Kid',Category:'kids'} }],
            }
          ],
          [
            {
              label: 'Clothing',
              items: [{ label: 'All Clothing',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Kid',Category:'kids'} }, { label: 'Sports',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Kid',Category:'kids'} }],
            },
            {
              label: 'Accessories',
              items: [{ label: 'All Accessories',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Kid',Category:'kids'} }, { label: 'Bags & Bagpacks',
              routerLink:[ 'main/products'],
              queryParams:{Type:'Kid',Category:'kids'} }],
            },
          ],
        ],
      },
    ];
  }
  // Toggle the menu display on hover
  toggleMenuDisplay() {
    this.showMenu = !this.showMenu;
  }
}
