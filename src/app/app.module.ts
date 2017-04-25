import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { TestcComponent } from './testc/testc.component';

// services
import { ModalService } from './modal/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TestcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ModalService ],
  bootstrap: [ AppComponent],
  entryComponents: [ ModalComponent ]
})
export class AppModule { }
