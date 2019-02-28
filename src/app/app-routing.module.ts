import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUpdateComponent } from './contact/contact-update';

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'contacts', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact-update', component: ContactUpdateComponent},
  {path:'', redirectTo:'/about', pathMatch: 'full'} // fixe about comme routes par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AboutComponent,
  ContactComponent,
  GalleryComponent,
  ContactUpdateComponent
] // permet d'eviter la duplication des components dans AppRouting et AppModule

