import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomeComponent, AboutComponent]
})
export class LayoutModule {}
