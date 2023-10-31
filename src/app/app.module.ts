import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './home/collections/collections.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './home/hero/hero.component';
import { ButtonComponent } from './shared/button/button.component';
import { AllCollectionsComponent } from './all-collections/all-collections.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { SliderComponent } from './shared/slider/slider.component';
import { CardComponent } from './shared/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    HomeComponent,
    ContactComponent,
    HeroComponent,
    ButtonComponent,
    AllCollectionsComponent,
    HeadingComponent,
    SliderComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
