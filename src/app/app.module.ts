import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// import { UserEffects } from './effects/user.effects';
// import { userReducer } from './reducers/user.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/components/hero/hero.component';
import { CollectionsComponent } from './pages/home/components/collections/collections.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductBoxComponent } from './pages/shop/product-box/product-box.component';
import { FiltersComponent } from './pages/shop/filters/filters.component';
import { ProductDetailComponent } from './shared/product-detail/product-detail.component';
import { AuthComponent } from './pages/auth/auth.component';
import { User } from './models/user.model';


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
    CartComponent,
    ProductBoxComponent,
    FiltersComponent,
    ProductDetailComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    EffectsModule.forRoot([
      // UserEffects
    ]),
    StoreModule.forRoot({
      // user: User
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
