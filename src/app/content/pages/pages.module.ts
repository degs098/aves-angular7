import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { PageRoutingModule } from './page-routing/page-routing.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PagesModule { }
