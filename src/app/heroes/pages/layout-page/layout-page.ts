import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-service';
import { User } from '../../../auth/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.html',
  styles: ``,
  standalone : false
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: "Listado", icon: "label", url: "./list"},
    { label: "Añadir", icon: "add", url: "./new-hero"},
    { label: "Buscar", icon: "search", url: "./search"},
  ];

  constructor(
    private authService : AuthService,
    private router : Router
  ){}

  onLogout() : void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  get user() : User | undefined {
    return this.authService.currentUser;
  }
}
