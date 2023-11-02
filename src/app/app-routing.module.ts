import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './home/collections/collections.component';
import { ContactComponent } from './contact/contact.component';
import { AllCollectionsComponent } from './all-collections/all-collections.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'all-collections', component: AllCollectionsComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
