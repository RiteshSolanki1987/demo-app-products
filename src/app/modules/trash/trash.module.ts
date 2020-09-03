import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrashRoutingModule } from './trash.routing';
import { MaterialModule } from '../../material/material.module';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { PipesModule } from '../../pipes/pipes.module';
import { TrashComponent } from './trash/trash.component';

@NgModule({
    declarations: [TrashComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        PipesModule,
        UIKitModule,
        TrashRoutingModule
    ],
    providers: [
        
    ],
    entryComponents: []
})
export class TrashModule { }