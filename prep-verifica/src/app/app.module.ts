import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { MacchinaComponent } from './macchina/macchina.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConteinerComponent } from './conteiner/conteiner.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MacchinaComponent,
    ConteinerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 