import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {MenuComponent} from "./menu/menu.component";
import {SearchComponent} from "./search-panel/search-panel.component";
import {RoomComponent} from "./room/room.component";
import {ItemRoomComponent} from "./room/item-room/item-room.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ItemCalendarComponent} from "./calendar/item-calendar/item-calendar.component";
import {HomeContentComponent} from "./home-content/home-content.component";
import {HomePostComponent} from "./home/home-post/home-post.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    SearchComponent,
    RoomComponent,
    ItemRoomComponent,
    CalendarComponent,
    ItemCalendarComponent,
    HomeContentComponent,
    HomePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
