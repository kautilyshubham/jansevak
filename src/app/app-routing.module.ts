import { MeetUpComponent } from './people/meet-up/meet-up.component';
import { GrivenceComponent } from './people/grivence/grivence.component';
import { MessagesComponent } from './propganda/messages/messages.component';
import { NewsComponent } from './propganda/news/news.component';
import { EventsComponent } from './propganda/events/events.component';
import { SocialFeedComponent } from './propganda/social-feed/social-feed.component';
import { ConfigComponent } from './config/config.component';
import { ProfileComponent } from './profile/profile.component';
import { PeopleComponent } from './people/people.component';
import { PropgandaComponent } from './propganda/propganda.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SurveyComponent } from './people/survey/survey.component';
const appRoutes: Routes=[
    {path: "", component:HomeComponent},
    {path: "portfolio", component: PortfolioComponent},
    {path: "propganda", component: PropgandaComponent, children:[
        {path: "", redirectTo: "social-feed", pathMatch: "full"},
        {path: "social-feed", component: SocialFeedComponent},
        {path: "events", component: EventsComponent},
        {path: "news", component: NewsComponent},
        {path: "messages", component: MessagesComponent},
        
    ]},
    {path: "people", component: PeopleComponent, children:[
        {path:"", redirectTo: "grivence",pathMatch:"full"},        
        {path:"grivence", component: GrivenceComponent},
        {path:"survey", component: SurveyComponent},
        {path:"meet-up", component: MeetUpComponent},
        
    ]},
    {path: "profile", component: ProfileComponent},
    {path: "config", component: ConfigComponent},
    
  ]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes),
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}