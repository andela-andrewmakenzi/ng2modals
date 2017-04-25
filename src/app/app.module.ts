import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { TestcComponent } from './testc/testc.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TestcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent],
  entryComponents: [ ModalComponent ]
})
export class AppModule { }
