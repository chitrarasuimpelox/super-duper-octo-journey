import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Base64Component } from './base64/base64.component';
import { HackComponent } from './hack/hack.component';

const routes: Routes = [
//   {path:"test",
//     component:TestComponent
//   }
//   ,
//   {
// path:"base64",
// component:Base64Component
//   }
{
  path:"hack",
  component:HackComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
