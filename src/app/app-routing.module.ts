import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { aboutComponent} from 'src/app/components/about/about.component';
import { heroeComponent } from './components/heroe/heroe.component';
import { homeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: homeComponent},
  { path: 'about',component: aboutComponent },
  {path: 'heroe', component: heroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
