import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

class UserToken{"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQW1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNjI2MTQ3MTgwLCJleHAiOjE2MjYxNTA3ODB9.FbqdOaSJ3RpPr038Cdxm1jzRiZPauqzoSnU-2KlLgGU"}
class Permissions {
  canActivate(user: UserToken): boolean {
    return true;
  }
}

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private permissions: Permissions, private currentUser: UserToken) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return this.permissions.canActivate(this.currentUser);
  }
}