import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WebTemplateComponent } from './main-page/web-template/web-template.component';
import { MainPageModule } from './main-page/main-page.module';

const routes : Routes = [
  { path : 'Main', component : WebTemplateComponent, loadChildren: () => MainPageModule },
  { path: '', redirectTo: '/Main', pathMatch: 'full'},
  { path: '**', redirectTo: '/404'},
  { path: '404', component : PageNotFoundComponent, data: {title: 'Page Not Found'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
