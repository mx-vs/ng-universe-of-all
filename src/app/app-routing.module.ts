import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { AdventuresComponent } from './adventures/adventures.component';
import { MyCharactersComponent } from './my-characters/my-characters.component';
import { CharacterCreatorDetailsComponent } from './character-creator-details/character-creator-details.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'adventures', component: AdventuresComponent},
  {path:'character-creator', component: CharacterCreatorComponent},
  {path:'character-creator-details', component: CharacterCreatorDetailsComponent},
  {path:'my-characters', component: MyCharactersComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
