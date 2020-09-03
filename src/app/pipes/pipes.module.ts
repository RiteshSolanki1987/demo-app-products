import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitText } from '../pipes/split-text.pipe';

@NgModule({
    declarations: [
        SplitText
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SplitText
    ],
    providers: [],
    entryComponents: []
})
export class PipesModule { }