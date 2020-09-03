import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home.routing';
import { MaterialModule } from '../../material/material.module';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { HomeComponent } from './home/home.component';
import { ProductRepository } from './repository/product.repository';
import { ProductService } from './repository/product.service';
import { ProductUseCase } from './repository/product.usecase';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [HomeComponent, ProductDetailsComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HomeRoutingModule,
        PipesModule,
        UIKitModule
    ],
    providers: [
        ProductUseCase, { provide: ProductRepository, useClass: ProductService }
    ],
    entryComponents: []
})
export class HomeModule { }