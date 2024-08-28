import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Base64Component } from './base64/base64.component';
import { HackComponent } from './hack/hack.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Base64Component,
    HackComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
