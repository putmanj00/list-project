import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/card/shared.module';
import { tasksModule } from './tasks/tasks.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, tasksModule],
})
export class AppModule {}
