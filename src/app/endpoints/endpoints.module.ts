import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndpointsRoutingModule } from './endpoints-routing.module';
import { EndpointsComponent } from './components/endpoints/endpoints.component';

@NgModule({
  imports: [
    CommonModule,
    EndpointsRoutingModule
  ],
  declarations: [EndpointsComponent]
})
export class EndpointsModule { }
