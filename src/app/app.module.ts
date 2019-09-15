import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PropgandaComponent } from './propganda/propganda.component';
import { PeopleComponent } from './people/people.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfigComponent } from './config/config.component';
import { SocialFeedComponent } from './propganda/social-feed/social-feed.component';
import { EventsComponent } from './propganda/events/events.component';
import { NewsComponent } from './propganda/news/news.component';
import { MessagesComponent } from './propganda/messages/messages.component';
import { GrivenceComponent } from './people/grivence/grivence.component';
import { SurveyComponent } from './people/survey/survey.component';
import { MeetUpComponent } from './people/meet-up/meet-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideMenuComponent,
    PortfolioComponent,
    PropgandaComponent,
    PeopleComponent,
    ProfileComponent,
    ConfigComponent,
    SocialFeedComponent,
    EventsComponent,
    NewsComponent,
    MessagesComponent,
    GrivenceComponent,
    SurveyComponent,
    MeetUpComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
   FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
