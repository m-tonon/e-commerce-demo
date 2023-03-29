import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/components/hero/hero.component';
import { CollectionsComponent } from './pages/home/components/collections/collections.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ShopComponent } from './pages/shop/shop.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeroComponent,
    CollectionsComponent,
    FooterComponent,
    MenuComponent,
    ShopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
