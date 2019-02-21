import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'registersign', loadChildren: './registersign/registersign.module#RegistersignPageModule' },
  { path: 'registerpassword', loadChildren: './registerpassword/registerpassword.module#RegisterpasswordPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'pcontent', loadChildren: './pcontent/pcontent.module#PcontentPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
