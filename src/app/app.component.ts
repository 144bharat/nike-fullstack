import { Component, OnInit } from '@angular/core';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { AdminPageComponent } from './Pages/admin-page/admin-page.component';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainPageComponent,AdminPageComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  loadAdmin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is 'admin'
        this.loadAdmin = event.url === '/admin';
      }
    });
  }
}
