import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    declarations: [NotificationComponent],
    imports: [CommonModule, FormsModule, MaterialModule],
    exports: [NotificationComponent],
    providers: [],
    entryComponents: []
})
export class UIKitModule { }