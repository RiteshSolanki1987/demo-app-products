import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FooterComponent } from './layout/common/footer/footer.component';
import { HeaderComponent } from './layout/common/header/header.component';
import { SidebarComponent } from './layout/common/sidebar/sidebar.component';
import { MaterialModule } from '../../material/material.module';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

@NgModule({
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    MaterialModule,
    NgMaterialMultilevelMenuModule
  ],
  providers: [
    
  ]
})
export class MainModule { }