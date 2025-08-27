import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/pages/home/home';
import { Configuring } from './app/pages/configuring/configuring';
import { Manufacturing } from './app/pages/manufacturing/manufacturing';
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, FormsModule),
    provideRouter([
      { path: '', component: HomeComponent },
          { path: 'configuring', component: Configuring },
        { path: 'manufacturing', component: Manufacturing },
      // İleride başka rotalar ekleyebilirsin
    ])
  ]
}).catch(err => console.error(err));
