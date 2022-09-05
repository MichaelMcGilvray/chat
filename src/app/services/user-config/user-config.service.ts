import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  constructor() { }

  public getUser(user?: string) {
    if (user !== undefined) {
      return {id: `${user}`, name: `${user}`}
    } else {
      return {id: "test-user-1", name: "Test user 1"};
    }
  }
}
