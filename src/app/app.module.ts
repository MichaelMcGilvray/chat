import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestDirectiveDirective } from './directives/test-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    PageNotFoundComponent,
    HomeComponent,
    TestDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  exports: [TestDirectiveDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
