import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent} from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SheetComponent } from './sheet/sheet.component';
import { AuthGuard } from './auth-guard.guard';
import { RegisterComponent } from './register/register.component';
import { ExistingSheetsComponent } from './existing-sheets/existing-sheets.component';
import { PlayRoomComponent } from './play-room/play-room.component';
import { GenerateRoomComponent } from './generate-room/generate-room.component';
import { ChooseCharacterComponent } from './choose-character/choose-character.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'newsheet', component: SheetComponent, canActivate: [AuthGuard] },
  { path: 'sheet', component: SheetComponent, canActivate: [AuthGuard] },
  { path: 'sheet/:characterName', component: SheetComponent, canActivate: [AuthGuard] },
  { path: 'sheets', component: ExistingSheetsComponent, canActivate: [AuthGuard] },
  { path: 'play/:id', component: PlayRoomComponent, canActivate: [AuthGuard] },
  { path: 'generate', component: GenerateRoomComponent, canActivate: [AuthGuard] },
  { path: 'choose/:id', component: ChooseCharacterComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
