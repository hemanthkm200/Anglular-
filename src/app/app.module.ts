import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeadderComponent } from './headder/headder.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: "",
    redirectTo: "/path-list",
    pathMatch: "full"
  },
  {
    path: "post-list",
    component: PostListComponent
  },
  {
    path: "post-edit/:index",
    component: PostEditComponent
  },
  {
    path: "post-add",
    component: PostEditComponent
  },
  {
    path: "auth",
    component: AuthComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    PostComponent,
    PostListComponent,
    PostEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    //To Communicate Backend With Backend.Service We Use This
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
