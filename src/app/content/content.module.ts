import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { NavComponent } from './layout/components/nav/nav.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,    
    PagesModule, 
    MaterialModule
  ],
  exports: [NavComponent]
})
export class ContentModule { }
