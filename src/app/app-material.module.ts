import { NgModule } from '@angular/core';
import * as mat from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    mat.MatToolbarModule,
    mat.MatCardModule,
    mat.MatButtonModule,
    mat.MatIconModule,
    mat.MatDividerModule,
    mat.MatGridListModule,
    mat.MatFormFieldModule,
    mat.MatInputModule
  ],
  exports: [
    mat.MatToolbarModule,
    mat.MatCardModule,
    mat.MatButtonModule,
    mat.MatIconModule,
    mat.MatDividerModule,
    mat.MatGridListModule,
    mat.MatFormFieldModule,
    mat.MatInputModule
  ]
})
export class AppMaterialModule { }
