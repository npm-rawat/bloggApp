import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', canActivate: [], component: HomeComponent },
  { path: 'new-blog', component: MyBlogComponent },
  { path: 'blog-edit/:id', component: BlogEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
