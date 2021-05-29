import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CustomMaterialModule} from './custom-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import {MAT_DIALOG_DATA, MatPaginatorModule, MatTableModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PageEndComponent } from './page-end/page-end.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    CommentDialogComponent,
    PageEndComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: [] } ],
  bootstrap: [AppComponent],
  entryComponents: [CommentDialogComponent]
})
export class AppModule { }
