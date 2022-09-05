import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from 'src/app/services/friends/friends.service';
import { UserConfigService } from 'src/app/services/user-config/user-config.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.sass']
})
export class ChatBoxComponent implements OnInit, OnDestroy {
  public user: any;
  public otherUser: any;
  public otherUserSubscription: any;
  public message: string = "";
  public messages: any[] = [];

  constructor(
    private userConfig: UserConfigService,
    private route: ActivatedRoute,
    private friendsService: FriendsService
  ) { }

  ngOnInit(): void {
    this.user = this.userConfig.getUser();
    this.otherUserSubscription = this.route.params.subscribe((params) => {
      this.otherUser = this.friendsService.getUserById(params['id']);
    });
  }

  public sendMessage() {
    if (this.message !== "") {
      this.messages.push({
        message: this.message,
        user: this.user
      });
      this.message = "";
    }
  }

  // For testing purposes
  public toggleUser() {
    const temp = this.user;
    this.user = this.otherUser;
    this.otherUser = temp;
  }

  ngOnDestroy(): void {
    this.otherUserSubscription.unsubscribe();
  }
}
