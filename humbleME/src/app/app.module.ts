import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatboxesComponent } from './chatboxes/chatboxes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SmsComponent } from './sms/sms.component';

const appRoutes: Routes = [
  {
    path: 'chat', component: ChatboxesComponent
  },
  {
    path: 'sms', component: SmsComponent
  },
  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatboxesComponent,
    PageNotFoundComponent,
    SmsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }  // this is a debugging thing
    ),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
