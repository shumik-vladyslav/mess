import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {MenuComponent} from "./menu/menu.component";
import {SearchComponent} from "./search-panel/search-panel.component";
import {RoomComponent} from "./room/room.component";
import {ItemRoomComponent} from "./room/item-room/item-room.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ItemCalendarComponent} from "./calendar/item-calendar/item-calendar.component";
import {HomePostComponent} from "./home/home-post/home-post.component";
import {PostComponent} from "./newpost/post.component";
import {CalendarModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SearchComponent,
    RoomComponent,
    ItemRoomComponent,
    CalendarComponent,
    ItemCalendarComponent,
    HomePostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CalendarModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
   
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
