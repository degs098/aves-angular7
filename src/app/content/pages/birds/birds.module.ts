import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdsRoutingModule } from './birds-routing/birds-routing.module';
import { BirdsComponent } from './birds.component';
import { BirdsListComponent } from './components/birds-list/birds-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BirdsService } from './services/birds.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BirdDialogComponent } from './components/bird-dialog/bird-dialog.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [BirdsComponent, BirdsListComponent, BirdDialogComponent],
  imports: [
    CommonModule,
    BirdsRoutingModule,        
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    SweetAlert2Module,    
  ],
  exports: [BirdsListComponent],
  providers: [BirdsService],
  entryComponents: [BirdDialogComponent]
})
export class BirdsModule { }
