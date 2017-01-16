import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RoomComponent} from "./room/room.component";
import {PostComponent} from "./newpost/post.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'room', component: RoomComponent },
  { path: 'msg', component: PostComponent }

];
