import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDialogModule

    ],
    exports: [
        CommonModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDialogModule
    ],
    declarations: []
})
export class MaterialModule { }
