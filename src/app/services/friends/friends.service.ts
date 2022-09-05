import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { }

  public getFriends() {
    return [
      {id: 'test-user-1', name: 'Test user 1'},
      {id: 'test-user-2', name: 'Test user 2'},
      {id: 'test-user-3', name: 'Test user 3'},
      {id: 'test-user-4', name: 'Test user 4'},
      {id: 'test-user-5', name: 'Test user 5'},
    ];
  }

  public getUserById(id: string): any {
    return {id: id, name: `User_${id}`}
  }
}
