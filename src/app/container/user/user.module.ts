import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MediasComponent } from './medias/medias.component';
import { UserComponent } from './user.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: MediasComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [UserComponent, MediasComponent]
})
export class UserModule { }
