import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AdminAuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user = this.authService.currentUser;
    if (user && user.admin) return true;

    this.router.navigate(["/no-access"]);
    return false;
  }
}
