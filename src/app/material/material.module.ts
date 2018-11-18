import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSortModule, MatTableModule, MatPaginatorModule, MatSidenavModule, MatListModule, MatGridListModule, MatDialogModule, MatFormFieldControl, MatSnackBarModule, MatTooltipModule, MatCheckboxModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [    
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,    
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
  ],
  exports: [        
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,    
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
  ]
})
export class MaterialModule { }
