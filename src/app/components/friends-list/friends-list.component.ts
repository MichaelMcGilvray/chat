import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/services/friends/friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.sass']
})
export class FriendsListComponent implements OnInit {
  public friends: any[] = [];
  constructor(
    private router: Router,
    private friendsService: FriendsService
  ) { }

  ngOnInit(): void { 
    this.friends = this.friendsService.getFriends();
  }

  public openChat(friendID: string) {
    this.router.navigate(['/chat-box/', friendID]);
  }
}
