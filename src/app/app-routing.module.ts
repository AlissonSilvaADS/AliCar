import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuggyComponent } from './components/buggy/buggy.component';

const routes: Routes = [
  {
    path: 'Buggy', component: BuggyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
