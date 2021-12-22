import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropDirective } from './drag-drop.directive';
import { UploadFileComponent } from './upload-files/upload-files.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

@NgModule({
  declarations: [AppComponent, UploadFileComponent, DragDropDirective, InlineEditComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
