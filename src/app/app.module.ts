import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainModule } from './modules/main/main.module';
import { ErrorLogService } from './exception/errorlog.service';
import { ConfirmComponent } from './ui-kit/confirm/confirm.component';
import { ProductRepository } from './modules/home/repository/product.repository';
import { ProductService } from './modules/home/repository/product.service';
import { ProductUseCase } from './modules/home/repository/product.usecase';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
    MaterialModule,
    MainModule,
  ],
  providers: [
    ErrorLogService,
    ProductUseCase, { provide: ProductRepository, useClass: ProductService }
  ],
  entryComponents: [ConfirmComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
