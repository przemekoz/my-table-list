import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
    exports: [
        CommonModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
    declarations: []
})
export class MaterialModule { }
