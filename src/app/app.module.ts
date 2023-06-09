import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/user/user.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent, //randomuser.me/api
    UserdetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
