import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdventuresComponent } from './adventures/adventures.component';
import { MyCharactersComponent } from './my-characters/my-characters.component';
import { RealmSelectComponent } from './realm-select/realm-select.component';
import { RaceSelectComponent } from './race-select/race-select.component';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { CharacterCreatorDetailsComponent } from './character-creator-details/character-creator-details.component';
import { AuthService } from './authentication.service';

const firebaseConfig = {
  apiKey: "AIzaSyAs8xk5pNdH8c9jkNIcmHKtSViUL-h0VKI",
  authDomain: "ng-universe-of-all.firebaseapp.com",
  projectId: "ng-universe-of-all",
  storageBucket: "ng-universe-of-all.appspot.com",
  messagingSenderId: "1047641896198",
  appId: "1:1047641896198:web:2c54e20d823a8c2b9b5a87"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    AdventuresComponent,
    MyCharactersComponent,
    RealmSelectComponent,
    RaceSelectComponent,
    CharacterCreatorComponent,
    CharacterCreatorDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
