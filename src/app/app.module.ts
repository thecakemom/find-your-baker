import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BakerComponent } from './baker/baker.component';
import { BakerLibraryComponent } from './baker-library/baker-library.component';
import { BakerListComponent } from './baker/baker-list/baker-list.component';
import { BakerDetailsComponent } from './baker/baker-details/baker-details.component';
import { BakerResultsComponent } from './baker-library/baker-results/baker-results.component';
import { BakerSearchComponent } from './baker-library/baker-search/baker-search.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { ProfilesComponent } from './shared/profiles/profiles.component';
import { AppRoutingModule } from './app-routing.module';
import { BakerHomeComponent } from './baker/baker-home/baker-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BakerComponent,
    BakerLibraryComponent,
    BakerListComponent,
    BakerDetailsComponent,
    BakerResultsComponent,
    BakerSearchComponent,
    NavigationComponent,
    ProfilesComponent,
    BakerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
