import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { EducationComponent } from '../pages/education/education.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { EnviromentComponent } from '../pages/enviroment/enviroment.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'enviroments', component: EnviromentComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/about' }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  useHash: true,
  preloadingStrategy: PreloadAllModules
});
