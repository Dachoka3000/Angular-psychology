import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component'
import { PostFormComponent } from './post-form/post-form.component'

const routes: Routes = [
  {path:'addpost', component:PostFormComponent},
  {path:'postlist', component:PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
