import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
    ],
    exports: [
        CommonModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
    ],
    declarations: []
})
export class MaterialModule { }
