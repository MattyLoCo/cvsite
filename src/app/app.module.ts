import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ExtrasComponent } from './extras/extras.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ExtrasComponent,
    FooterComponent,
    ContactComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
