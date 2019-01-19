import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatToolbar,
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSidenavContainer,
  MatSidenavModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    FlexLayoutModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule {}
