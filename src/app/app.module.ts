import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './home/collections/collections.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './home/hero/hero.component';
import { AllCollectionsComponent } from './all-collections/all-collections.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { SliderComponent } from './shared/slider/slider.component';
import { CardComponent } from './shared/card/card.component';
import { CourseFooterComponent } from './shared/card/course-footer/course-footer.component';
import { BlogFooterComponent } from './shared/card/blog-footer/blog-footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthLinksComponent } from './shared/auth-links/auth-links.component';
import { ButtonComponent } from './shared/button/button.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EmailComponent } from './shared/email/email.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { SubscribeFormComponent } from './shared/subscribe-form/subscribe-form.component';
import { BookStackComponent } from './shared/book-stack/book-stack.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    HomeComponent,
    ContactComponent,
    HeroComponent,
    AllCollectionsComponent,
    HeadingComponent,
    SliderComponent,
    CardComponent,
    CourseFooterComponent,
    BlogFooterComponent,
    MenuComponent,
    AuthLinksComponent,
    ButtonComponent,
    FooterComponent,
    EmailComponent,
    PhoneComponent,
    SocialLinksComponent,
    SubscribeFormComponent,
    BookStackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
